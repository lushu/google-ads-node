var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v1.errors.AuthenticationErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.errors.AuthenticationErrorEnum.AuthenticationError",null,global),proto.google.ads.googleads.v1.errors.AuthenticationErrorEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.errors.AuthenticationErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.errors.AuthenticationErrorEnum.displayName="proto.google.ads.googleads.v1.errors.AuthenticationErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.errors.AuthenticationErrorEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.errors.AuthenticationErrorEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.errors.AuthenticationErrorEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.errors.AuthenticationErrorEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.errors.AuthenticationErrorEnum;return proto.google.ads.googleads.v1.errors.AuthenticationErrorEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.errors.AuthenticationErrorEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v1.errors.AuthenticationErrorEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.errors.AuthenticationErrorEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.errors.AuthenticationErrorEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v1.errors.AuthenticationErrorEnum.AuthenticationError={UNSPECIFIED:0,UNKNOWN:1,AUTHENTICATION_ERROR:2,CLIENT_CUSTOMER_ID_INVALID:5,CUSTOMER_NOT_FOUND:8,GOOGLE_ACCOUNT_DELETED:9,GOOGLE_ACCOUNT_COOKIE_INVALID:10,GOOGLE_ACCOUNT_AUTHENTICATION_FAILED:25,GOOGLE_ACCOUNT_USER_AND_ADS_USER_MISMATCH:12,LOGIN_COOKIE_REQUIRED:13,NOT_ADS_USER:14,OAUTH_TOKEN_INVALID:15,OAUTH_TOKEN_EXPIRED:16,OAUTH_TOKEN_DISABLED:17,OAUTH_TOKEN_REVOKED:18,OAUTH_TOKEN_HEADER_INVALID:19,LOGIN_COOKIE_INVALID:20,USER_ID_INVALID:22,TWO_STEP_VERIFICATION_NOT_ENROLLED:23,ADVANCED_PROTECTION_NOT_ENROLLED:24},goog.object.extend(exports,proto.google.ads.googleads.v1.errors);