var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v1.enums.MatchingFunctionOperatorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.enums.MatchingFunctionOperatorEnum.MatchingFunctionOperator",null,global),proto.google.ads.googleads.v1.enums.MatchingFunctionOperatorEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.enums.MatchingFunctionOperatorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.enums.MatchingFunctionOperatorEnum.displayName="proto.google.ads.googleads.v1.enums.MatchingFunctionOperatorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.enums.MatchingFunctionOperatorEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.enums.MatchingFunctionOperatorEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.enums.MatchingFunctionOperatorEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.enums.MatchingFunctionOperatorEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.enums.MatchingFunctionOperatorEnum;return proto.google.ads.googleads.v1.enums.MatchingFunctionOperatorEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.enums.MatchingFunctionOperatorEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v1.enums.MatchingFunctionOperatorEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.enums.MatchingFunctionOperatorEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.enums.MatchingFunctionOperatorEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v1.enums.MatchingFunctionOperatorEnum.MatchingFunctionOperator={UNSPECIFIED:0,UNKNOWN:1,IN:2,IDENTITY:3,EQUALS:4,AND:5,CONTAINS_ANY:6},goog.object.extend(exports,proto.google.ads.googleads.v1.enums);