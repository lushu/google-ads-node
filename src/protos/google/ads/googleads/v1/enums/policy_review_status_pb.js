var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v1.enums.PolicyReviewStatusEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.enums.PolicyReviewStatusEnum.PolicyReviewStatus",null,global),proto.google.ads.googleads.v1.enums.PolicyReviewStatusEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.enums.PolicyReviewStatusEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.enums.PolicyReviewStatusEnum.displayName="proto.google.ads.googleads.v1.enums.PolicyReviewStatusEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.enums.PolicyReviewStatusEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.enums.PolicyReviewStatusEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.enums.PolicyReviewStatusEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.enums.PolicyReviewStatusEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.enums.PolicyReviewStatusEnum;return proto.google.ads.googleads.v1.enums.PolicyReviewStatusEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.enums.PolicyReviewStatusEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v1.enums.PolicyReviewStatusEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.enums.PolicyReviewStatusEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.enums.PolicyReviewStatusEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v1.enums.PolicyReviewStatusEnum.PolicyReviewStatus={UNSPECIFIED:0,UNKNOWN:1,REVIEW_IN_PROGRESS:2,REVIEWED:3,UNDER_APPEAL:4},goog.object.extend(exports,proto.google.ads.googleads.v1.enums);