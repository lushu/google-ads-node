var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v1.enums.ConversionLagBucketEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.enums.ConversionLagBucketEnum.ConversionLagBucket",null,global),proto.google.ads.googleads.v1.enums.ConversionLagBucketEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.enums.ConversionLagBucketEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.enums.ConversionLagBucketEnum.displayName="proto.google.ads.googleads.v1.enums.ConversionLagBucketEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.enums.ConversionLagBucketEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.enums.ConversionLagBucketEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.enums.ConversionLagBucketEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.enums.ConversionLagBucketEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.enums.ConversionLagBucketEnum;return proto.google.ads.googleads.v1.enums.ConversionLagBucketEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.enums.ConversionLagBucketEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v1.enums.ConversionLagBucketEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.enums.ConversionLagBucketEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.enums.ConversionLagBucketEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v1.enums.ConversionLagBucketEnum.ConversionLagBucket={UNSPECIFIED:0,UNKNOWN:1,LESS_THAN_ONE_DAY:2,ONE_TO_TWO_DAYS:3,TWO_TO_THREE_DAYS:4,THREE_TO_FOUR_DAYS:5,FOUR_TO_FIVE_DAYS:6,FIVE_TO_SIX_DAYS:7,SIX_TO_SEVEN_DAYS:8,SEVEN_TO_EIGHT_DAYS:9,EIGHT_TO_NINE_DAYS:10,NINE_TO_TEN_DAYS:11,TEN_TO_ELEVEN_DAYS:12,ELEVEN_TO_TWELVE_DAYS:13,TWELVE_TO_THIRTEEN_DAYS:14,THIRTEEN_TO_FOURTEEN_DAYS:15,FOURTEEN_TO_TWENTY_ONE_DAYS:16,TWENTY_ONE_TO_THIRTY_DAYS:17,THIRTY_TO_FORTY_FIVE_DAYS:18,FORTY_FIVE_TO_SIXTY_DAYS:19,SIXTY_TO_NINETY_DAYS:20},goog.object.extend(exports,proto.google.ads.googleads.v1.enums);