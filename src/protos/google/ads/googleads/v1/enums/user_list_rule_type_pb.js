var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v1.enums.UserListRuleTypeEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.enums.UserListRuleTypeEnum.UserListRuleType",null,global),proto.google.ads.googleads.v1.enums.UserListRuleTypeEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.enums.UserListRuleTypeEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.enums.UserListRuleTypeEnum.displayName="proto.google.ads.googleads.v1.enums.UserListRuleTypeEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.enums.UserListRuleTypeEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.enums.UserListRuleTypeEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.enums.UserListRuleTypeEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.enums.UserListRuleTypeEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.enums.UserListRuleTypeEnum;return proto.google.ads.googleads.v1.enums.UserListRuleTypeEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.enums.UserListRuleTypeEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v1.enums.UserListRuleTypeEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.enums.UserListRuleTypeEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.enums.UserListRuleTypeEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v1.enums.UserListRuleTypeEnum.UserListRuleType={UNSPECIFIED:0,UNKNOWN:1,AND_OF_ORS:2,OR_OF_ANDS:3},goog.object.extend(exports,proto.google.ads.googleads.v1.enums);