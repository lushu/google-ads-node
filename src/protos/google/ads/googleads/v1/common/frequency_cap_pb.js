var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v1_enums_frequency_cap_event_type_pb=require("../../../../../google/ads/googleads/v1/enums/frequency_cap_event_type_pb.js"),google_ads_googleads_v1_enums_frequency_cap_level_pb=require("../../../../../google/ads/googleads/v1/enums/frequency_cap_level_pb.js"),google_ads_googleads_v1_enums_frequency_cap_time_unit_pb=require("../../../../../google/ads/googleads/v1/enums/frequency_cap_time_unit_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v1.common.FrequencyCapEntry",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.common.FrequencyCapKey",null,global),proto.google.ads.googleads.v1.common.FrequencyCapEntry=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.common.FrequencyCapEntry,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.common.FrequencyCapEntry.displayName="proto.google.ads.googleads.v1.common.FrequencyCapEntry"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.common.FrequencyCapEntry.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.common.FrequencyCapEntry.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.common.FrequencyCapEntry.toObject=function(includeInstance,msg){var f,obj={key:(f=msg.getKey())&&proto.google.ads.googleads.v1.common.FrequencyCapKey.toObject(includeInstance,f),cap:(f=msg.getCap())&&google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.common.FrequencyCapEntry.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.common.FrequencyCapEntry;return proto.google.ads.googleads.v1.common.FrequencyCapEntry.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.common.FrequencyCapEntry.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=new proto.google.ads.googleads.v1.common.FrequencyCapKey;reader.readMessage(value,proto.google.ads.googleads.v1.common.FrequencyCapKey.deserializeBinaryFromReader),msg.setKey(value);break;case 2:value=new google_protobuf_wrappers_pb.Int32Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader),msg.setCap(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.common.FrequencyCapEntry.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.common.FrequencyCapEntry.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.common.FrequencyCapEntry.serializeBinaryToWriter=function(message,writer){var f=void 0;null!=(f=message.getKey())&&writer.writeMessage(1,f,proto.google.ads.googleads.v1.common.FrequencyCapKey.serializeBinaryToWriter),null!=(f=message.getCap())&&writer.writeMessage(2,f,google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter)},proto.google.ads.googleads.v1.common.FrequencyCapEntry.prototype.getKey=function(){return jspb.Message.getWrapperField(this,proto.google.ads.googleads.v1.common.FrequencyCapKey,1)},proto.google.ads.googleads.v1.common.FrequencyCapEntry.prototype.setKey=function(value){jspb.Message.setWrapperField(this,1,value)},proto.google.ads.googleads.v1.common.FrequencyCapEntry.prototype.clearKey=function(){this.setKey(void 0)},proto.google.ads.googleads.v1.common.FrequencyCapEntry.prototype.hasKey=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v1.common.FrequencyCapEntry.prototype.getCap=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int32Value,2)},proto.google.ads.googleads.v1.common.FrequencyCapEntry.prototype.setCap=function(value){jspb.Message.setWrapperField(this,2,value)},proto.google.ads.googleads.v1.common.FrequencyCapEntry.prototype.clearCap=function(){this.setCap(void 0)},proto.google.ads.googleads.v1.common.FrequencyCapEntry.prototype.hasCap=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v1.common.FrequencyCapKey=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.common.FrequencyCapKey,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.common.FrequencyCapKey.displayName="proto.google.ads.googleads.v1.common.FrequencyCapKey"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.common.FrequencyCapKey.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.common.FrequencyCapKey.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.common.FrequencyCapKey.toObject=function(includeInstance,msg){var f,obj={level:jspb.Message.getFieldWithDefault(msg,1,0),eventType:jspb.Message.getFieldWithDefault(msg,3,0),timeUnit:jspb.Message.getFieldWithDefault(msg,2,0),timeLength:(f=msg.getTimeLength())&&google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.common.FrequencyCapKey.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.common.FrequencyCapKey;return proto.google.ads.googleads.v1.common.FrequencyCapKey.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.common.FrequencyCapKey.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readEnum();msg.setLevel(value);break;case 3:value=reader.readEnum();msg.setEventType(value);break;case 2:value=reader.readEnum();msg.setTimeUnit(value);break;case 4:value=new google_protobuf_wrappers_pb.Int32Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader),msg.setTimeLength(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.common.FrequencyCapKey.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.common.FrequencyCapKey.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.common.FrequencyCapKey.serializeBinaryToWriter=function(message,writer){var f=void 0;0!==(f=message.getLevel())&&writer.writeEnum(1,f),0!==(f=message.getEventType())&&writer.writeEnum(3,f),0!==(f=message.getTimeUnit())&&writer.writeEnum(2,f),null!=(f=message.getTimeLength())&&writer.writeMessage(4,f,google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter)},proto.google.ads.googleads.v1.common.FrequencyCapKey.prototype.getLevel=function(){return jspb.Message.getFieldWithDefault(this,1,0)},proto.google.ads.googleads.v1.common.FrequencyCapKey.prototype.setLevel=function(value){jspb.Message.setProto3EnumField(this,1,value)},proto.google.ads.googleads.v1.common.FrequencyCapKey.prototype.getEventType=function(){return jspb.Message.getFieldWithDefault(this,3,0)},proto.google.ads.googleads.v1.common.FrequencyCapKey.prototype.setEventType=function(value){jspb.Message.setProto3EnumField(this,3,value)},proto.google.ads.googleads.v1.common.FrequencyCapKey.prototype.getTimeUnit=function(){return jspb.Message.getFieldWithDefault(this,2,0)},proto.google.ads.googleads.v1.common.FrequencyCapKey.prototype.setTimeUnit=function(value){jspb.Message.setProto3EnumField(this,2,value)},proto.google.ads.googleads.v1.common.FrequencyCapKey.prototype.getTimeLength=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int32Value,4)},proto.google.ads.googleads.v1.common.FrequencyCapKey.prototype.setTimeLength=function(value){jspb.Message.setWrapperField(this,4,value)},proto.google.ads.googleads.v1.common.FrequencyCapKey.prototype.clearTimeLength=function(){this.setTimeLength(void 0)},proto.google.ads.googleads.v1.common.FrequencyCapKey.prototype.hasTimeLength=function(){return null!=jspb.Message.getField(this,4)},goog.object.extend(exports,proto.google.ads.googleads.v1.common);