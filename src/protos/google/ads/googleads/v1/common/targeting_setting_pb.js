var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v1_enums_targeting_dimension_pb=require("../../../../../google/ads/googleads/v1/enums/targeting_dimension_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v1.common.TargetRestriction",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.common.TargetingSetting",null,global),proto.google.ads.googleads.v1.common.TargetingSetting=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v1.common.TargetingSetting.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v1.common.TargetingSetting,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.common.TargetingSetting.displayName="proto.google.ads.googleads.v1.common.TargetingSetting"),proto.google.ads.googleads.v1.common.TargetingSetting.repeatedFields_=[1],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.common.TargetingSetting.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.common.TargetingSetting.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.common.TargetingSetting.toObject=function(includeInstance,msg){var obj={targetRestrictionsList:jspb.Message.toObjectList(msg.getTargetRestrictionsList(),proto.google.ads.googleads.v1.common.TargetRestriction.toObject,includeInstance)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.common.TargetingSetting.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.common.TargetingSetting;return proto.google.ads.googleads.v1.common.TargetingSetting.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.common.TargetingSetting.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=new proto.google.ads.googleads.v1.common.TargetRestriction;reader.readMessage(value,proto.google.ads.googleads.v1.common.TargetRestriction.deserializeBinaryFromReader),msg.addTargetRestrictions(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.common.TargetingSetting.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.common.TargetingSetting.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.common.TargetingSetting.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getTargetRestrictionsList()).length&&writer.writeRepeatedMessage(1,f,proto.google.ads.googleads.v1.common.TargetRestriction.serializeBinaryToWriter)},proto.google.ads.googleads.v1.common.TargetingSetting.prototype.getTargetRestrictionsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v1.common.TargetRestriction,1)},proto.google.ads.googleads.v1.common.TargetingSetting.prototype.setTargetRestrictionsList=function(value){jspb.Message.setRepeatedWrapperField(this,1,value)},proto.google.ads.googleads.v1.common.TargetingSetting.prototype.addTargetRestrictions=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,1,opt_value,proto.google.ads.googleads.v1.common.TargetRestriction,opt_index)},proto.google.ads.googleads.v1.common.TargetingSetting.prototype.clearTargetRestrictionsList=function(){this.setTargetRestrictionsList([])},proto.google.ads.googleads.v1.common.TargetRestriction=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.common.TargetRestriction,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.common.TargetRestriction.displayName="proto.google.ads.googleads.v1.common.TargetRestriction"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.common.TargetRestriction.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.common.TargetRestriction.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.common.TargetRestriction.toObject=function(includeInstance,msg){var f,obj={targetingDimension:jspb.Message.getFieldWithDefault(msg,1,0),bidOnly:(f=msg.getBidOnly())&&google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.common.TargetRestriction.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.common.TargetRestriction;return proto.google.ads.googleads.v1.common.TargetRestriction.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.common.TargetRestriction.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readEnum();msg.setTargetingDimension(value);break;case 2:value=new google_protobuf_wrappers_pb.BoolValue;reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader),msg.setBidOnly(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.common.TargetRestriction.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.common.TargetRestriction.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.common.TargetRestriction.serializeBinaryToWriter=function(message,writer){var f=void 0;0!==(f=message.getTargetingDimension())&&writer.writeEnum(1,f),null!=(f=message.getBidOnly())&&writer.writeMessage(2,f,google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter)},proto.google.ads.googleads.v1.common.TargetRestriction.prototype.getTargetingDimension=function(){return jspb.Message.getFieldWithDefault(this,1,0)},proto.google.ads.googleads.v1.common.TargetRestriction.prototype.setTargetingDimension=function(value){jspb.Message.setProto3EnumField(this,1,value)},proto.google.ads.googleads.v1.common.TargetRestriction.prototype.getBidOnly=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.BoolValue,2)},proto.google.ads.googleads.v1.common.TargetRestriction.prototype.setBidOnly=function(value){jspb.Message.setWrapperField(this,2,value)},proto.google.ads.googleads.v1.common.TargetRestriction.prototype.clearBidOnly=function(){this.setBidOnly(void 0)},proto.google.ads.googleads.v1.common.TargetRestriction.prototype.hasBidOnly=function(){return null!=jspb.Message.getField(this,2)},goog.object.extend(exports,proto.google.ads.googleads.v1.common);