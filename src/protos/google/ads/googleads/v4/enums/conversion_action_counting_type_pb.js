var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.enums.ConversionActionCountingTypeEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v4.enums.ConversionActionCountingTypeEnum.ConversionActionCountingType",null,global),proto.google.ads.googleads.v4.enums.ConversionActionCountingTypeEnum=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.enums.ConversionActionCountingTypeEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.enums.ConversionActionCountingTypeEnum.displayName="proto.google.ads.googleads.v4.enums.ConversionActionCountingTypeEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.enums.ConversionActionCountingTypeEnum.prototype.toObject=function(o){return proto.google.ads.googleads.v4.enums.ConversionActionCountingTypeEnum.toObject(o,this)},proto.google.ads.googleads.v4.enums.ConversionActionCountingTypeEnum.toObject=function(o,n){var e={};return o&&(e.$jspbMessageInstance=n),e}),proto.google.ads.googleads.v4.enums.ConversionActionCountingTypeEnum.deserializeBinary=function(o){var n=new jspb.BinaryReader(o),e=new proto.google.ads.googleads.v4.enums.ConversionActionCountingTypeEnum;return proto.google.ads.googleads.v4.enums.ConversionActionCountingTypeEnum.deserializeBinaryFromReader(e,n)},proto.google.ads.googleads.v4.enums.ConversionActionCountingTypeEnum.deserializeBinaryFromReader=function(o,n){for(;n.nextField()&&!n.isEndGroup();){n.getFieldNumber();n.skipField()}return o},proto.google.ads.googleads.v4.enums.ConversionActionCountingTypeEnum.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.enums.ConversionActionCountingTypeEnum.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.enums.ConversionActionCountingTypeEnum.serializeBinaryToWriter=function(o,n){},proto.google.ads.googleads.v4.enums.ConversionActionCountingTypeEnum.ConversionActionCountingType={UNSPECIFIED:0,UNKNOWN:1,ONE_PER_CLICK:2,MANY_PER_CLICK:3},goog.object.extend(exports,proto.google.ads.googleads.v4.enums);