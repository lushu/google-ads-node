var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v1.errors.MediaUploadErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.errors.MediaUploadErrorEnum.MediaUploadError",null,global),proto.google.ads.googleads.v1.errors.MediaUploadErrorEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.errors.MediaUploadErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.errors.MediaUploadErrorEnum.displayName="proto.google.ads.googleads.v1.errors.MediaUploadErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.errors.MediaUploadErrorEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.errors.MediaUploadErrorEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.errors.MediaUploadErrorEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.errors.MediaUploadErrorEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.errors.MediaUploadErrorEnum;return proto.google.ads.googleads.v1.errors.MediaUploadErrorEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.errors.MediaUploadErrorEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v1.errors.MediaUploadErrorEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.errors.MediaUploadErrorEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.errors.MediaUploadErrorEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v1.errors.MediaUploadErrorEnum.MediaUploadError={UNSPECIFIED:0,UNKNOWN:1,FILE_TOO_BIG:2,UNPARSEABLE_IMAGE:3,ANIMATED_IMAGE_NOT_ALLOWED:4,FORMAT_NOT_ALLOWED:5},goog.object.extend(exports,proto.google.ads.googleads.v1.errors);