var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v1.enums.KeywordPlanCompetitionLevelEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.enums.KeywordPlanCompetitionLevelEnum.KeywordPlanCompetitionLevel",null,global),proto.google.ads.googleads.v1.enums.KeywordPlanCompetitionLevelEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.enums.KeywordPlanCompetitionLevelEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.enums.KeywordPlanCompetitionLevelEnum.displayName="proto.google.ads.googleads.v1.enums.KeywordPlanCompetitionLevelEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.enums.KeywordPlanCompetitionLevelEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.enums.KeywordPlanCompetitionLevelEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.enums.KeywordPlanCompetitionLevelEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.enums.KeywordPlanCompetitionLevelEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.enums.KeywordPlanCompetitionLevelEnum;return proto.google.ads.googleads.v1.enums.KeywordPlanCompetitionLevelEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.enums.KeywordPlanCompetitionLevelEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v1.enums.KeywordPlanCompetitionLevelEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.enums.KeywordPlanCompetitionLevelEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.enums.KeywordPlanCompetitionLevelEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v1.enums.KeywordPlanCompetitionLevelEnum.KeywordPlanCompetitionLevel={UNSPECIFIED:0,UNKNOWN:1,LOW:2,MEDIUM:3,HIGH:4},goog.object.extend(exports,proto.google.ads.googleads.v1.enums);