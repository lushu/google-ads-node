var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.errors.GeoTargetConstantSuggestionErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v3.errors.GeoTargetConstantSuggestionErrorEnum.GeoTargetConstantSuggestionError",null,global),proto.google.ads.googleads.v3.errors.GeoTargetConstantSuggestionErrorEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.errors.GeoTargetConstantSuggestionErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.errors.GeoTargetConstantSuggestionErrorEnum.displayName="proto.google.ads.googleads.v3.errors.GeoTargetConstantSuggestionErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.errors.GeoTargetConstantSuggestionErrorEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.errors.GeoTargetConstantSuggestionErrorEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.errors.GeoTargetConstantSuggestionErrorEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.errors.GeoTargetConstantSuggestionErrorEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.errors.GeoTargetConstantSuggestionErrorEnum;return proto.google.ads.googleads.v3.errors.GeoTargetConstantSuggestionErrorEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.errors.GeoTargetConstantSuggestionErrorEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)reader.getFieldNumber(),reader.skipField();return msg},proto.google.ads.googleads.v3.errors.GeoTargetConstantSuggestionErrorEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.errors.GeoTargetConstantSuggestionErrorEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.errors.GeoTargetConstantSuggestionErrorEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v3.errors.GeoTargetConstantSuggestionErrorEnum.GeoTargetConstantSuggestionError={UNSPECIFIED:0,UNKNOWN:1,LOCATION_NAME_SIZE_LIMIT:2,LOCATION_NAME_LIMIT:3,INVALID_COUNTRY_CODE:4,REQUEST_PARAMETERS_UNSET:5},goog.object.extend(exports,proto.google.ads.googleads.v3.errors);