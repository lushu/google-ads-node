var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v1.enums.ChangeStatusResourceTypeEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.enums.ChangeStatusResourceTypeEnum.ChangeStatusResourceType",null,global),proto.google.ads.googleads.v1.enums.ChangeStatusResourceTypeEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.enums.ChangeStatusResourceTypeEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.enums.ChangeStatusResourceTypeEnum.displayName="proto.google.ads.googleads.v1.enums.ChangeStatusResourceTypeEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.enums.ChangeStatusResourceTypeEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.enums.ChangeStatusResourceTypeEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.enums.ChangeStatusResourceTypeEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.enums.ChangeStatusResourceTypeEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.enums.ChangeStatusResourceTypeEnum;return proto.google.ads.googleads.v1.enums.ChangeStatusResourceTypeEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.enums.ChangeStatusResourceTypeEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v1.enums.ChangeStatusResourceTypeEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.enums.ChangeStatusResourceTypeEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.enums.ChangeStatusResourceTypeEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v1.enums.ChangeStatusResourceTypeEnum.ChangeStatusResourceType={UNSPECIFIED:0,UNKNOWN:1,AD_GROUP:3,AD_GROUP_AD:4,AD_GROUP_CRITERION:5,CAMPAIGN:6,CAMPAIGN_CRITERION:7,FEED:9,FEED_ITEM:10,AD_GROUP_FEED:11,CAMPAIGN_FEED:12,AD_GROUP_BID_MODIFIER:13},goog.object.extend(exports,proto.google.ads.googleads.v1.enums);