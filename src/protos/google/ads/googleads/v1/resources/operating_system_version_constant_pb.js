var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v1_enums_operating_system_version_operator_type_pb=require("../../../../../google/ads/googleads/v1/enums/operating_system_version_operator_type_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v1.resources.OperatingSystemVersionConstant",null,global),proto.google.ads.googleads.v1.resources.OperatingSystemVersionConstant=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.resources.OperatingSystemVersionConstant,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.resources.OperatingSystemVersionConstant.displayName="proto.google.ads.googleads.v1.resources.OperatingSystemVersionConstant"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.resources.OperatingSystemVersionConstant.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.resources.OperatingSystemVersionConstant.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.resources.OperatingSystemVersionConstant.toObject=function(includeInstance,msg){var f,obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,""),id:(f=msg.getId())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),name:(f=msg.getName())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),osMajorVersion:(f=msg.getOsMajorVersion())&&google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance,f),osMinorVersion:(f=msg.getOsMinorVersion())&&google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance,f),operatorType:jspb.Message.getFieldWithDefault(msg,6,0)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.resources.OperatingSystemVersionConstant.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.resources.OperatingSystemVersionConstant;return proto.google.ads.googleads.v1.resources.OperatingSystemVersionConstant.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.resources.OperatingSystemVersionConstant.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;case 2:value=new google_protobuf_wrappers_pb.Int64Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setId(value);break;case 3:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setName(value);break;case 4:value=new google_protobuf_wrappers_pb.Int32Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader),msg.setOsMajorVersion(value);break;case 5:value=new google_protobuf_wrappers_pb.Int32Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader),msg.setOsMinorVersion(value);break;case 6:value=reader.readEnum();msg.setOperatorType(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.resources.OperatingSystemVersionConstant.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.resources.OperatingSystemVersionConstant.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.resources.OperatingSystemVersionConstant.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getResourceName()).length&&writer.writeString(1,f),null!=(f=message.getId())&&writer.writeMessage(2,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(f=message.getName())&&writer.writeMessage(3,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getOsMajorVersion())&&writer.writeMessage(4,f,google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter),null!=(f=message.getOsMinorVersion())&&writer.writeMessage(5,f,google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter),0!==(f=message.getOperatorType())&&writer.writeEnum(6,f)},proto.google.ads.googleads.v1.resources.OperatingSystemVersionConstant.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v1.resources.OperatingSystemVersionConstant.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v1.resources.OperatingSystemVersionConstant.prototype.getId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,2)},proto.google.ads.googleads.v1.resources.OperatingSystemVersionConstant.prototype.setId=function(value){jspb.Message.setWrapperField(this,2,value)},proto.google.ads.googleads.v1.resources.OperatingSystemVersionConstant.prototype.clearId=function(){this.setId(void 0)},proto.google.ads.googleads.v1.resources.OperatingSystemVersionConstant.prototype.hasId=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v1.resources.OperatingSystemVersionConstant.prototype.getName=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,3)},proto.google.ads.googleads.v1.resources.OperatingSystemVersionConstant.prototype.setName=function(value){jspb.Message.setWrapperField(this,3,value)},proto.google.ads.googleads.v1.resources.OperatingSystemVersionConstant.prototype.clearName=function(){this.setName(void 0)},proto.google.ads.googleads.v1.resources.OperatingSystemVersionConstant.prototype.hasName=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v1.resources.OperatingSystemVersionConstant.prototype.getOsMajorVersion=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int32Value,4)},proto.google.ads.googleads.v1.resources.OperatingSystemVersionConstant.prototype.setOsMajorVersion=function(value){jspb.Message.setWrapperField(this,4,value)},proto.google.ads.googleads.v1.resources.OperatingSystemVersionConstant.prototype.clearOsMajorVersion=function(){this.setOsMajorVersion(void 0)},proto.google.ads.googleads.v1.resources.OperatingSystemVersionConstant.prototype.hasOsMajorVersion=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v1.resources.OperatingSystemVersionConstant.prototype.getOsMinorVersion=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int32Value,5)},proto.google.ads.googleads.v1.resources.OperatingSystemVersionConstant.prototype.setOsMinorVersion=function(value){jspb.Message.setWrapperField(this,5,value)},proto.google.ads.googleads.v1.resources.OperatingSystemVersionConstant.prototype.clearOsMinorVersion=function(){this.setOsMinorVersion(void 0)},proto.google.ads.googleads.v1.resources.OperatingSystemVersionConstant.prototype.hasOsMinorVersion=function(){return null!=jspb.Message.getField(this,5)},proto.google.ads.googleads.v1.resources.OperatingSystemVersionConstant.prototype.getOperatorType=function(){return jspb.Message.getFieldWithDefault(this,6,0)},proto.google.ads.googleads.v1.resources.OperatingSystemVersionConstant.prototype.setOperatorType=function(value){jspb.Message.setProto3EnumField(this,6,value)},goog.object.extend(exports,proto.google.ads.googleads.v1.resources);