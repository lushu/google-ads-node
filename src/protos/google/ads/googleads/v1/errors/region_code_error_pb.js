var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v1.errors.RegionCodeErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.errors.RegionCodeErrorEnum.RegionCodeError",null,global),proto.google.ads.googleads.v1.errors.RegionCodeErrorEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.errors.RegionCodeErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.errors.RegionCodeErrorEnum.displayName="proto.google.ads.googleads.v1.errors.RegionCodeErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.errors.RegionCodeErrorEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.errors.RegionCodeErrorEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.errors.RegionCodeErrorEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.errors.RegionCodeErrorEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.errors.RegionCodeErrorEnum;return proto.google.ads.googleads.v1.errors.RegionCodeErrorEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.errors.RegionCodeErrorEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v1.errors.RegionCodeErrorEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.errors.RegionCodeErrorEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.errors.RegionCodeErrorEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v1.errors.RegionCodeErrorEnum.RegionCodeError={UNSPECIFIED:0,UNKNOWN:1,INVALID_REGION_CODE:2},goog.object.extend(exports,proto.google.ads.googleads.v1.errors);