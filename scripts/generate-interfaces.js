const fs = require("fs");
const get = require("lodash.get");
const pb = require("protobufjs");
const snakeCase = require("lodash.snakecase");

function snakeCaseGads(str) {
  const snaked = snakeCase(str);
  const last_character = snaked[snaked.length - 1];
  if (!isNaN(+last_character)) {
    return snaked.slice(0, snaked.length - 2) + last_character;
  }
  return snaked;
}

const COMPILED_ENUMS_FILEPATH = process.argv[2];
const API_VERSION = process.argv[3];
const OUT_FILE = process.argv[4];
const MAPPING_OUT_FILE = process.argv[5];
const BASE_PATH = `google.ads.googleads.${API_VERSION}`;

const file = require(COMPILED_ENUMS_FILEPATH);
const resources = getProtobufRoot(`${BASE_PATH}.resources`);
const common = getProtobufRoot(`${BASE_PATH}.common`);
const services = getProtobufRoot(`${BASE_PATH}.services`);

const stream = fs.createWriteStream(OUT_FILE);
const mapStream = fs.createWriteStream(MAPPING_OUT_FILE);
const root = pb.loadSync(COMPILED_ENUMS_FILEPATH);

const pbToTsMapping = {
  bool: "boolean",
  "google.protobuf.BoolValue": "boolean",

  int64: "number",
  int32: "number",
  "google.protobuf.Int64Value": "number",
  "google.protobuf.Int32Value": "number",
  "google.protobuf.UInt64Value": "number",
  float: "number",
  "google.protobuf.FloatValue": "number",
  double: "number",
  "google.protobuf.DoubleValue": "number",

  bytes: "string",
  string: "string",
  "google.protobuf.StringValue": "string",
  "google.protobuf.BytesValue": "string",
};

const enumImports = new Set();
const scopedInterfaces = [];
const entitiesWithEnumsOnly = [];

stream.write("/* Autogenerated File! Do Not Edit. */\n");

/* Compile core types */
// console.log("compiling common types");
translateEntities(common);
// console.log("compiling resource types");
translateEntities(resources);

translateEntities(services);

/* Generate additional custom types */
buildMetricsUnionType(); // All metrics as union string literal

/* Write enum imports to file */
const allEnumImports = Array.from(enumImports);
if (allEnumImports.length > 0) {
  stream.write(`\n\nimport { ${allEnumImports.join(",\n")} } from "./enums"`);
}

/* Close stream */
stream.end();

/* Write field to enum name map to another file */
writeEnumMapping(entitiesWithEnumsOnly);

function buildMetricsUnionType() {
  const metrics = root.lookup("Metrics");
  const allMetrics = metrics.fieldsArray.map(m => snakeCaseGads(m.name));

  let unionMetrics = "";
  for (const metric of allMetrics) {
    const i = allMetrics.indexOf(metric);
    unionMetrics += `"${metric}"`;
    if (i !== allMetrics.length - 1) {
      unionMetrics += `|\n`;
    }
  }

  stream.write(`\n/* MetricFields (custom type) */\n`);
  stream.write(`export type MetricFields = ${unionMetrics}\n`);
}

function buildNestedInterfaces(entity) {
  if (entity.nestedArray && entity.nestedArray.length > 0) {
    for (const nested of entity.nestedArray) {
      buildNestedInterfaces(nested);
    }
  }
  stream.write("\n");
  buildInterfaceType(entity);
}

function translateEntities(entities) {
  for (const i in entities) {
    const entity = root.lookup(i);

    if (entity.comment) {
      stream.write(`/* ${entity.comment} */\n`);
    }

    const isUnionType = !!entity.oneofs && entity.oneofs.value;
    if (isUnionType) {
      buildUnionType(entity);
      stream.write("\n");
      continue;
    }
    buildNestedInterfaces(entity);
  }
}

function buildUnionType(entity) {
  stream.write(`export type ${entity.name} = \n`);

  for (let i = 0; i < entity.fieldsArray.length; i++) {
    const field = entity.fieldsArray[i];
    const isFinalField = i === entity.fieldsArray.length - 1;

    const key = `${snakeCaseGads(field.name)}?`;
    const translated = translateType(field, field.name, entity.parent);

    if (translated.isEnum) {
      enumImports.add(translated.type);
    }

    let line = `{ ${key}: ${translated.type} } `;
    if (!isFinalField) line += `|\n`;

    stream.write(line);
  }
}

function buildInterfaceType(entity) {
  stream.write(`/* ${entity.fullName} */\n`);
  stream.write(`export interface ${entity.name} {\n`);
  scopedInterfaces.push(entity.name);

  for (const f in entity.fields) {
    const field = entity.fields[f];

    let key = snakeCaseGads(field.name);
    if (!field.required) key += `?`;

    let translated = translateType(field, f, entity.parent);
    let type = translated.type;

    if (field.repeated) {
      type += `[]`;
    }
    if (translated.isEnum) {
      enumImports.add(translated.type);
    }
    stream.write(`${key}: ${type},\n`);
  }

  stream.write(`}\n`);

  /* Build resource objects with only enum properties */
  buildEntityWithEnumsOnly(entity);
}

function buildEntityWithEnumsOnly(entity) {
  if (entity.fullName.includes("services")) {
    return;
  }

  let entityWithEnumsOnly = `\n/* ${entity.fullName} */\nexport const ${snakeCaseGads(
    entity.name
  )} = {\n`;

  for (const f in entity.fields) {
    const field = entity.fields[f];

    let key = snakeCaseGads(field.name);
    let translated = translateType(field, f, entity.parent);
    let type = translated.type;

    if (scopedInterfaces.includes(type)) {
      if (key === snakeCaseGads(type)) {
        entityWithEnumsOnly += `${key},\n`;
      } else {
        entityWithEnumsOnly += `${key}: ${snakeCaseGads(type)},\n`;
      }
      continue;
    }

    if (translated.isEnum) {
      entityWithEnumsOnly += `${key}: "${type}",\n`;
    }
  }

  entityWithEnumsOnly += `}\n`;
  entitiesWithEnumsOnly.push(entityWithEnumsOnly);
}

function translateType(field, key, parent) {
  const { type } = field;

  const mapping = pbToTsMapping[type];
  if (mapping) {
    return { type: mapping, isEnum: false };
  }

  const lookup = root.lookupTypeOrEnum(type);

  /* When the type is defined in the parent */
  if (scopedInterfaces.includes(lookup.name)) {
    return { type: lookup.name, isEnum: false };
  }
  if (
    lookup.parent &&
    field.parent &&
    lookup.parent.parent.name !== "common" &&
    lookup.parent.name === field.parent.name
  ) {
    return { type: field.type, isEnum: false };
  }

  if (lookup.parent.name === "common") {
    /* If it's a common type */
    return { type: lookup.name, isEnum: false };
  }

  /* It it's an enum type (already compiled) */
  if (lookup.fullName.includes("enums")) {
    return { type: lookup.name, isEnum: true };
  }

  if (lookup.fields) {
    let objType = "";

    for (const item of lookup.fieldsArray) {
      if (!item) return { type: "undefined", isEnum: false };
      let type = pbToTsMapping[item.type];

      if (!type) {
        const translated = translateType({ type: item.type }, key, parent);
        if (translated.isEnum) {
          enumImports.add(translated.type);
        }
        type = translated.type;
      }
      if (item.repeated) {
        type += `[]`;
      }
      let itemKey = snakeCaseGads(item.name);
      if (!item.required) {
        itemKey += `?`;
      }
      objType += `${itemKey}: ${type},\n`;
    }
    return { type: `{${objType}}`, isEnum: false };
  }

  return { type: "undefined", isEnum: false };
}

function getProtobufRoot(path) {
  const nestedPath = path.split(".").join(".nested.");
  return get(file, `nested.${nestedPath}.nested`);
}

function writeEnumMapping(entities) {
  mapStream.write("/* Autogenerated File! Do Not Edit. */\n");
  for (const e of entitiesWithEnumsOnly) {
    mapStream.write(e);
  }
  mapStream.close();
}
