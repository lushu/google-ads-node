var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.errors.UserDataErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.errors.UserDataErrorEnum.UserDataError",null,global),proto.google.ads.googleads.v4.errors.UserDataErrorEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.errors.UserDataErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.errors.UserDataErrorEnum.displayName="proto.google.ads.googleads.v4.errors.UserDataErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.errors.UserDataErrorEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.errors.UserDataErrorEnum.toObject(o,this)},proto.google.ads.googleads.v4.errors.UserDataErrorEnum.toObject=function(o,r){var e={};return o&&(e.$jspbMessageInstance=r),e}),proto.google.ads.googleads.v4.errors.UserDataErrorEnum.deserializeBinary=function(o){var r=new jspb.BinaryReader(o),e=new proto.google.ads.googleads.v4.errors.UserDataErrorEnum;return proto.google.ads.googleads.v4.errors.UserDataErrorEnum.deserializeBinaryFromReader(e,r)},proto.google.ads.googleads.v4.errors.UserDataErrorEnum.deserializeBinaryFromReader=function(o,r){for(;r.nextField()&&!r.isEndGroup();){r.getFieldNumber();r.skipField()}return o},proto.google.ads.googleads.v4.errors.UserDataErrorEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.errors.UserDataErrorEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.errors.UserDataErrorEnum.serializeBinaryToWriter=function(o,r){},proto.google.ads.googleads.v4.errors.UserDataErrorEnum.UserDataError={UNSPECIFIED:0,UNKNOWN:1,OPERATIONS_FOR_CUSTOMER_MATCH_NOT_ALLOWED:2,TOO_MANY_USER_IDENTIFIERS:3,USER_LIST_NOT_APPLICABLE:4},goog.object.extend(exports,proto.google.ads.googleads.v4.errors);