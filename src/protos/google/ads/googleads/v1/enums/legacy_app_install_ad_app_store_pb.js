var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v1.enums.LegacyAppInstallAdAppStoreEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.enums.LegacyAppInstallAdAppStoreEnum.LegacyAppInstallAdAppStore",null,global),proto.google.ads.googleads.v1.enums.LegacyAppInstallAdAppStoreEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.enums.LegacyAppInstallAdAppStoreEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.enums.LegacyAppInstallAdAppStoreEnum.displayName="proto.google.ads.googleads.v1.enums.LegacyAppInstallAdAppStoreEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.enums.LegacyAppInstallAdAppStoreEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.enums.LegacyAppInstallAdAppStoreEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.enums.LegacyAppInstallAdAppStoreEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.enums.LegacyAppInstallAdAppStoreEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.enums.LegacyAppInstallAdAppStoreEnum;return proto.google.ads.googleads.v1.enums.LegacyAppInstallAdAppStoreEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.enums.LegacyAppInstallAdAppStoreEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v1.enums.LegacyAppInstallAdAppStoreEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.enums.LegacyAppInstallAdAppStoreEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.enums.LegacyAppInstallAdAppStoreEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v1.enums.LegacyAppInstallAdAppStoreEnum.LegacyAppInstallAdAppStore={UNSPECIFIED:0,UNKNOWN:1,APPLE_APP_STORE:2,GOOGLE_PLAY:3,WINDOWS_STORE:4,WINDOWS_PHONE_STORE:5,CN_APP_STORE:6},goog.object.extend(exports,proto.google.ads.googleads.v1.enums);