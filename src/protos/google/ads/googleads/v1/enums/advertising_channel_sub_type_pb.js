var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v1.enums.AdvertisingChannelSubTypeEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.enums.AdvertisingChannelSubTypeEnum.AdvertisingChannelSubType",null,global),proto.google.ads.googleads.v1.enums.AdvertisingChannelSubTypeEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.enums.AdvertisingChannelSubTypeEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.enums.AdvertisingChannelSubTypeEnum.displayName="proto.google.ads.googleads.v1.enums.AdvertisingChannelSubTypeEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.enums.AdvertisingChannelSubTypeEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.enums.AdvertisingChannelSubTypeEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.enums.AdvertisingChannelSubTypeEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.enums.AdvertisingChannelSubTypeEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.enums.AdvertisingChannelSubTypeEnum;return proto.google.ads.googleads.v1.enums.AdvertisingChannelSubTypeEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.enums.AdvertisingChannelSubTypeEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v1.enums.AdvertisingChannelSubTypeEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.enums.AdvertisingChannelSubTypeEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.enums.AdvertisingChannelSubTypeEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v1.enums.AdvertisingChannelSubTypeEnum.AdvertisingChannelSubType={UNSPECIFIED:0,UNKNOWN:1,SEARCH_MOBILE_APP:2,DISPLAY_MOBILE_APP:3,SEARCH_EXPRESS:4,DISPLAY_EXPRESS:5,SHOPPING_SMART_ADS:6,DISPLAY_GMAIL_AD:7,DISPLAY_SMART_CAMPAIGN:8,VIDEO_OUTSTREAM:9,VIDEO_ACTION:10,VIDEO_NON_SKIPPABLE:11,APP_CAMPAIGN:12,APP_CAMPAIGN_FOR_ENGAGEMENT:13,SHOPPING_COMPARISON_LISTING_ADS:15},goog.object.extend(exports,proto.google.ads.googleads.v1.enums);