var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v1.enums.DeviceEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.enums.DeviceEnum.Device",null,global),proto.google.ads.googleads.v1.enums.DeviceEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.enums.DeviceEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.enums.DeviceEnum.displayName="proto.google.ads.googleads.v1.enums.DeviceEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.enums.DeviceEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.enums.DeviceEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.enums.DeviceEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.enums.DeviceEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.enums.DeviceEnum;return proto.google.ads.googleads.v1.enums.DeviceEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.enums.DeviceEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v1.enums.DeviceEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.enums.DeviceEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.enums.DeviceEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v1.enums.DeviceEnum.Device={UNSPECIFIED:0,UNKNOWN:1,MOBILE:2,TABLET:3,DESKTOP:4,CONNECTED_TV:6,OTHER:5},goog.object.extend(exports,proto.google.ads.googleads.v1.enums);