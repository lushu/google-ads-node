var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v1.errors.FeedItemErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.errors.FeedItemErrorEnum.FeedItemError",null,global),proto.google.ads.googleads.v1.errors.FeedItemErrorEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.errors.FeedItemErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.errors.FeedItemErrorEnum.displayName="proto.google.ads.googleads.v1.errors.FeedItemErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.errors.FeedItemErrorEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.errors.FeedItemErrorEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.errors.FeedItemErrorEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.errors.FeedItemErrorEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.errors.FeedItemErrorEnum;return proto.google.ads.googleads.v1.errors.FeedItemErrorEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.errors.FeedItemErrorEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v1.errors.FeedItemErrorEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.errors.FeedItemErrorEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.errors.FeedItemErrorEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v1.errors.FeedItemErrorEnum.FeedItemError={UNSPECIFIED:0,UNKNOWN:1,CANNOT_CONVERT_ATTRIBUTE_VALUE_FROM_STRING:2,CANNOT_OPERATE_ON_REMOVED_FEED_ITEM:3,DATE_TIME_MUST_BE_IN_ACCOUNT_TIME_ZONE:4,KEY_ATTRIBUTES_NOT_FOUND:5,INVALID_URL:6,MISSING_KEY_ATTRIBUTES:7,KEY_ATTRIBUTES_NOT_UNIQUE:8,CANNOT_MODIFY_KEY_ATTRIBUTE_VALUE:9,SIZE_TOO_LARGE_FOR_MULTI_VALUE_ATTRIBUTE:10},goog.object.extend(exports,proto.google.ads.googleads.v1.errors);