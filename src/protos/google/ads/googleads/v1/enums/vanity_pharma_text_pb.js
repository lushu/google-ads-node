var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v1.enums.VanityPharmaTextEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.enums.VanityPharmaTextEnum.VanityPharmaText",null,global),proto.google.ads.googleads.v1.enums.VanityPharmaTextEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.enums.VanityPharmaTextEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.enums.VanityPharmaTextEnum.displayName="proto.google.ads.googleads.v1.enums.VanityPharmaTextEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.enums.VanityPharmaTextEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.enums.VanityPharmaTextEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.enums.VanityPharmaTextEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.enums.VanityPharmaTextEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.enums.VanityPharmaTextEnum;return proto.google.ads.googleads.v1.enums.VanityPharmaTextEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.enums.VanityPharmaTextEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v1.enums.VanityPharmaTextEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.enums.VanityPharmaTextEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.enums.VanityPharmaTextEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v1.enums.VanityPharmaTextEnum.VanityPharmaText={UNSPECIFIED:0,UNKNOWN:1,PRESCRIPTION_TREATMENT_WEBSITE_EN:2,PRESCRIPTION_TREATMENT_WEBSITE_ES:3,PRESCRIPTION_DEVICE_WEBSITE_EN:4,PRESCRIPTION_DEVICE_WEBSITE_ES:5,MEDICAL_DEVICE_WEBSITE_EN:6,MEDICAL_DEVICE_WEBSITE_ES:7,PREVENTATIVE_TREATMENT_WEBSITE_EN:8,PREVENTATIVE_TREATMENT_WEBSITE_ES:9,PRESCRIPTION_CONTRACEPTION_WEBSITE_EN:10,PRESCRIPTION_CONTRACEPTION_WEBSITE_ES:11,PRESCRIPTION_VACCINE_WEBSITE_EN:12,PRESCRIPTION_VACCINE_WEBSITE_ES:13},goog.object.extend(exports,proto.google.ads.googleads.v1.enums);