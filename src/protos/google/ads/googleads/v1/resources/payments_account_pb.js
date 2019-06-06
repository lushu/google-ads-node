var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v1.resources.PaymentsAccount",null,global),proto.google.ads.googleads.v1.resources.PaymentsAccount=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.resources.PaymentsAccount,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.resources.PaymentsAccount.displayName="proto.google.ads.googleads.v1.resources.PaymentsAccount"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.resources.PaymentsAccount.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.resources.PaymentsAccount.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.resources.PaymentsAccount.toObject=function(includeInstance,msg){var f,obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,""),paymentsAccountId:(f=msg.getPaymentsAccountId())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),name:(f=msg.getName())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),currencyCode:(f=msg.getCurrencyCode())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),paymentsProfileId:(f=msg.getPaymentsProfileId())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),secondaryPaymentsProfileId:(f=msg.getSecondaryPaymentsProfileId())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.resources.PaymentsAccount.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.resources.PaymentsAccount;return proto.google.ads.googleads.v1.resources.PaymentsAccount.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.resources.PaymentsAccount.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;case 2:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setPaymentsAccountId(value);break;case 3:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setName(value);break;case 4:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setCurrencyCode(value);break;case 5:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setPaymentsProfileId(value);break;case 6:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setSecondaryPaymentsProfileId(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.resources.PaymentsAccount.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.resources.PaymentsAccount.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.resources.PaymentsAccount.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getResourceName()).length&&writer.writeString(1,f),null!=(f=message.getPaymentsAccountId())&&writer.writeMessage(2,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getName())&&writer.writeMessage(3,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getCurrencyCode())&&writer.writeMessage(4,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getPaymentsProfileId())&&writer.writeMessage(5,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getSecondaryPaymentsProfileId())&&writer.writeMessage(6,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter)},proto.google.ads.googleads.v1.resources.PaymentsAccount.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v1.resources.PaymentsAccount.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v1.resources.PaymentsAccount.prototype.getPaymentsAccountId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,2)},proto.google.ads.googleads.v1.resources.PaymentsAccount.prototype.setPaymentsAccountId=function(value){jspb.Message.setWrapperField(this,2,value)},proto.google.ads.googleads.v1.resources.PaymentsAccount.prototype.clearPaymentsAccountId=function(){this.setPaymentsAccountId(void 0)},proto.google.ads.googleads.v1.resources.PaymentsAccount.prototype.hasPaymentsAccountId=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v1.resources.PaymentsAccount.prototype.getName=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,3)},proto.google.ads.googleads.v1.resources.PaymentsAccount.prototype.setName=function(value){jspb.Message.setWrapperField(this,3,value)},proto.google.ads.googleads.v1.resources.PaymentsAccount.prototype.clearName=function(){this.setName(void 0)},proto.google.ads.googleads.v1.resources.PaymentsAccount.prototype.hasName=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v1.resources.PaymentsAccount.prototype.getCurrencyCode=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,4)},proto.google.ads.googleads.v1.resources.PaymentsAccount.prototype.setCurrencyCode=function(value){jspb.Message.setWrapperField(this,4,value)},proto.google.ads.googleads.v1.resources.PaymentsAccount.prototype.clearCurrencyCode=function(){this.setCurrencyCode(void 0)},proto.google.ads.googleads.v1.resources.PaymentsAccount.prototype.hasCurrencyCode=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v1.resources.PaymentsAccount.prototype.getPaymentsProfileId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,5)},proto.google.ads.googleads.v1.resources.PaymentsAccount.prototype.setPaymentsProfileId=function(value){jspb.Message.setWrapperField(this,5,value)},proto.google.ads.googleads.v1.resources.PaymentsAccount.prototype.clearPaymentsProfileId=function(){this.setPaymentsProfileId(void 0)},proto.google.ads.googleads.v1.resources.PaymentsAccount.prototype.hasPaymentsProfileId=function(){return null!=jspb.Message.getField(this,5)},proto.google.ads.googleads.v1.resources.PaymentsAccount.prototype.getSecondaryPaymentsProfileId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,6)},proto.google.ads.googleads.v1.resources.PaymentsAccount.prototype.setSecondaryPaymentsProfileId=function(value){jspb.Message.setWrapperField(this,6,value)},proto.google.ads.googleads.v1.resources.PaymentsAccount.prototype.clearSecondaryPaymentsProfileId=function(){this.setSecondaryPaymentsProfileId(void 0)},proto.google.ads.googleads.v1.resources.PaymentsAccount.prototype.hasSecondaryPaymentsProfileId=function(){return null!=jspb.Message.getField(this,6)},goog.object.extend(exports,proto.google.ads.googleads.v1.resources);