var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v1.enums.VanityPharmaDisplayUrlModeEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.enums.VanityPharmaDisplayUrlModeEnum.VanityPharmaDisplayUrlMode",null,global),proto.google.ads.googleads.v1.enums.VanityPharmaDisplayUrlModeEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.enums.VanityPharmaDisplayUrlModeEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.enums.VanityPharmaDisplayUrlModeEnum.displayName="proto.google.ads.googleads.v1.enums.VanityPharmaDisplayUrlModeEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.enums.VanityPharmaDisplayUrlModeEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.enums.VanityPharmaDisplayUrlModeEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.enums.VanityPharmaDisplayUrlModeEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.enums.VanityPharmaDisplayUrlModeEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.enums.VanityPharmaDisplayUrlModeEnum;return proto.google.ads.googleads.v1.enums.VanityPharmaDisplayUrlModeEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.enums.VanityPharmaDisplayUrlModeEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v1.enums.VanityPharmaDisplayUrlModeEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.enums.VanityPharmaDisplayUrlModeEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.enums.VanityPharmaDisplayUrlModeEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v1.enums.VanityPharmaDisplayUrlModeEnum.VanityPharmaDisplayUrlMode={UNSPECIFIED:0,UNKNOWN:1,MANUFACTURER_WEBSITE_URL:2,WEBSITE_DESCRIPTION:3},goog.object.extend(exports,proto.google.ads.googleads.v1.enums);