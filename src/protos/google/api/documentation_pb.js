var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")();goog.exportSymbol("proto.google.api.Documentation",null,global),goog.exportSymbol("proto.google.api.DocumentationRule",null,global),goog.exportSymbol("proto.google.api.Page",null,global),proto.google.api.Documentation=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.api.Documentation.repeatedFields_,null)},goog.inherits(proto.google.api.Documentation,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.api.Documentation.displayName="proto.google.api.Documentation"),proto.google.api.Documentation.repeatedFields_=[5,3],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.api.Documentation.prototype.toObject=function(opt_includeInstance){return proto.google.api.Documentation.toObject(opt_includeInstance,this)},proto.google.api.Documentation.toObject=function(includeInstance,msg){var obj={summary:jspb.Message.getFieldWithDefault(msg,1,""),pagesList:jspb.Message.toObjectList(msg.getPagesList(),proto.google.api.Page.toObject,includeInstance),rulesList:jspb.Message.toObjectList(msg.getRulesList(),proto.google.api.DocumentationRule.toObject,includeInstance),documentationRootUrl:jspb.Message.getFieldWithDefault(msg,4,""),overview:jspb.Message.getFieldWithDefault(msg,2,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.api.Documentation.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.api.Documentation;return proto.google.api.Documentation.deserializeBinaryFromReader(msg,reader)},proto.google.api.Documentation.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setSummary(value);break;case 5:value=new proto.google.api.Page,reader.readMessage(value,proto.google.api.Page.deserializeBinaryFromReader),msg.addPages(value);break;case 3:value=new proto.google.api.DocumentationRule,reader.readMessage(value,proto.google.api.DocumentationRule.deserializeBinaryFromReader),msg.addRules(value);break;case 4:value=reader.readString(),msg.setDocumentationRootUrl(value);break;case 2:value=reader.readString(),msg.setOverview(value);break;default:reader.skipField()}return msg},proto.google.api.Documentation.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.api.Documentation.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.api.Documentation.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getSummary()).length&&writer.writeString(1,f),0<(f=message.getPagesList()).length&&writer.writeRepeatedMessage(5,f,proto.google.api.Page.serializeBinaryToWriter),0<(f=message.getRulesList()).length&&writer.writeRepeatedMessage(3,f,proto.google.api.DocumentationRule.serializeBinaryToWriter),0<(f=message.getDocumentationRootUrl()).length&&writer.writeString(4,f),0<(f=message.getOverview()).length&&writer.writeString(2,f)},proto.google.api.Documentation.prototype.getSummary=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.api.Documentation.prototype.setSummary=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.api.Documentation.prototype.getPagesList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.api.Page,5)},proto.google.api.Documentation.prototype.setPagesList=function(value){jspb.Message.setRepeatedWrapperField(this,5,value)},proto.google.api.Documentation.prototype.addPages=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,5,opt_value,proto.google.api.Page,opt_index)},proto.google.api.Documentation.prototype.clearPagesList=function(){this.setPagesList([])},proto.google.api.Documentation.prototype.getRulesList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.api.DocumentationRule,3)},proto.google.api.Documentation.prototype.setRulesList=function(value){jspb.Message.setRepeatedWrapperField(this,3,value)},proto.google.api.Documentation.prototype.addRules=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,3,opt_value,proto.google.api.DocumentationRule,opt_index)},proto.google.api.Documentation.prototype.clearRulesList=function(){this.setRulesList([])},proto.google.api.Documentation.prototype.getDocumentationRootUrl=function(){return jspb.Message.getFieldWithDefault(this,4,"")},proto.google.api.Documentation.prototype.setDocumentationRootUrl=function(value){jspb.Message.setProto3StringField(this,4,value)},proto.google.api.Documentation.prototype.getOverview=function(){return jspb.Message.getFieldWithDefault(this,2,"")},proto.google.api.Documentation.prototype.setOverview=function(value){jspb.Message.setProto3StringField(this,2,value)},proto.google.api.DocumentationRule=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.api.DocumentationRule,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.api.DocumentationRule.displayName="proto.google.api.DocumentationRule"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.api.DocumentationRule.prototype.toObject=function(opt_includeInstance){return proto.google.api.DocumentationRule.toObject(opt_includeInstance,this)},proto.google.api.DocumentationRule.toObject=function(includeInstance,msg){var obj={selector:jspb.Message.getFieldWithDefault(msg,1,""),description:jspb.Message.getFieldWithDefault(msg,2,""),deprecationDescription:jspb.Message.getFieldWithDefault(msg,3,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.api.DocumentationRule.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.api.DocumentationRule;return proto.google.api.DocumentationRule.deserializeBinaryFromReader(msg,reader)},proto.google.api.DocumentationRule.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setSelector(value);break;case 2:value=reader.readString(),msg.setDescription(value);break;case 3:value=reader.readString(),msg.setDeprecationDescription(value);break;default:reader.skipField()}return msg},proto.google.api.DocumentationRule.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.api.DocumentationRule.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.api.DocumentationRule.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getSelector()).length&&writer.writeString(1,f),0<(f=message.getDescription()).length&&writer.writeString(2,f),0<(f=message.getDeprecationDescription()).length&&writer.writeString(3,f)},proto.google.api.DocumentationRule.prototype.getSelector=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.api.DocumentationRule.prototype.setSelector=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.api.DocumentationRule.prototype.getDescription=function(){return jspb.Message.getFieldWithDefault(this,2,"")},proto.google.api.DocumentationRule.prototype.setDescription=function(value){jspb.Message.setProto3StringField(this,2,value)},proto.google.api.DocumentationRule.prototype.getDeprecationDescription=function(){return jspb.Message.getFieldWithDefault(this,3,"")},proto.google.api.DocumentationRule.prototype.setDeprecationDescription=function(value){jspb.Message.setProto3StringField(this,3,value)},proto.google.api.Page=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.api.Page.repeatedFields_,null)},goog.inherits(proto.google.api.Page,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.api.Page.displayName="proto.google.api.Page"),proto.google.api.Page.repeatedFields_=[3],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.api.Page.prototype.toObject=function(opt_includeInstance){return proto.google.api.Page.toObject(opt_includeInstance,this)},proto.google.api.Page.toObject=function(includeInstance,msg){var obj={name:jspb.Message.getFieldWithDefault(msg,1,""),content:jspb.Message.getFieldWithDefault(msg,2,""),subpagesList:jspb.Message.toObjectList(msg.getSubpagesList(),proto.google.api.Page.toObject,includeInstance)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.api.Page.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.api.Page;return proto.google.api.Page.deserializeBinaryFromReader(msg,reader)},proto.google.api.Page.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setName(value);break;case 2:value=reader.readString(),msg.setContent(value);break;case 3:value=new proto.google.api.Page,reader.readMessage(value,proto.google.api.Page.deserializeBinaryFromReader),msg.addSubpages(value);break;default:reader.skipField()}return msg},proto.google.api.Page.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.api.Page.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.api.Page.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getName()).length&&writer.writeString(1,f),0<(f=message.getContent()).length&&writer.writeString(2,f),0<(f=message.getSubpagesList()).length&&writer.writeRepeatedMessage(3,f,proto.google.api.Page.serializeBinaryToWriter)},proto.google.api.Page.prototype.getName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.api.Page.prototype.setName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.api.Page.prototype.getContent=function(){return jspb.Message.getFieldWithDefault(this,2,"")},proto.google.api.Page.prototype.setContent=function(value){jspb.Message.setProto3StringField(this,2,value)},proto.google.api.Page.prototype.getSubpagesList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.api.Page,3)},proto.google.api.Page.prototype.setSubpagesList=function(value){jspb.Message.setRepeatedWrapperField(this,3,value)},proto.google.api.Page.prototype.addSubpages=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,3,opt_value,proto.google.api.Page,opt_index)},proto.google.api.Page.prototype.clearSubpagesList=function(){this.setSubpagesList([])},goog.object.extend(exports,proto.google.api);