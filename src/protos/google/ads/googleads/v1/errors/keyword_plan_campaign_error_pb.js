var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v1.errors.KeywordPlanCampaignErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.errors.KeywordPlanCampaignErrorEnum.KeywordPlanCampaignError",null,global),proto.google.ads.googleads.v1.errors.KeywordPlanCampaignErrorEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.errors.KeywordPlanCampaignErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.errors.KeywordPlanCampaignErrorEnum.displayName="proto.google.ads.googleads.v1.errors.KeywordPlanCampaignErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.errors.KeywordPlanCampaignErrorEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.errors.KeywordPlanCampaignErrorEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.errors.KeywordPlanCampaignErrorEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.errors.KeywordPlanCampaignErrorEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.errors.KeywordPlanCampaignErrorEnum;return proto.google.ads.googleads.v1.errors.KeywordPlanCampaignErrorEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.errors.KeywordPlanCampaignErrorEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v1.errors.KeywordPlanCampaignErrorEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.errors.KeywordPlanCampaignErrorEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.errors.KeywordPlanCampaignErrorEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v1.errors.KeywordPlanCampaignErrorEnum.KeywordPlanCampaignError={UNSPECIFIED:0,UNKNOWN:1,INVALID_NAME:2,INVALID_LANGUAGES:3,INVALID_GEOS:4,DUPLICATE_NAME:5,MAX_GEOS_EXCEEDED:6},goog.object.extend(exports,proto.google.ads.googleads.v1.errors);