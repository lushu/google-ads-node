var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v1_enums_shared_set_status_pb=require("../../../../../google/ads/googleads/v1/enums/shared_set_status_pb.js"),google_ads_googleads_v1_enums_shared_set_type_pb=require("../../../../../google/ads/googleads/v1/enums/shared_set_type_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v1.resources.SharedSet",null,global),proto.google.ads.googleads.v1.resources.SharedSet=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.resources.SharedSet,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.resources.SharedSet.displayName="proto.google.ads.googleads.v1.resources.SharedSet"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.resources.SharedSet.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.resources.SharedSet.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.resources.SharedSet.toObject=function(includeInstance,msg){var f,obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,""),id:(f=msg.getId())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),type:jspb.Message.getFieldWithDefault(msg,3,0),name:(f=msg.getName())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),status:jspb.Message.getFieldWithDefault(msg,5,0),memberCount:(f=msg.getMemberCount())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),referenceCount:(f=msg.getReferenceCount())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.resources.SharedSet.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.resources.SharedSet;return proto.google.ads.googleads.v1.resources.SharedSet.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.resources.SharedSet.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;case 2:value=new google_protobuf_wrappers_pb.Int64Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setId(value);break;case 3:value=reader.readEnum();msg.setType(value);break;case 4:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setName(value);break;case 5:value=reader.readEnum();msg.setStatus(value);break;case 6:value=new google_protobuf_wrappers_pb.Int64Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setMemberCount(value);break;case 7:value=new google_protobuf_wrappers_pb.Int64Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setReferenceCount(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.resources.SharedSet.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.resources.SharedSet.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.resources.SharedSet.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getResourceName()).length&&writer.writeString(1,f),null!=(f=message.getId())&&writer.writeMessage(2,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),0!==(f=message.getType())&&writer.writeEnum(3,f),null!=(f=message.getName())&&writer.writeMessage(4,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),0!==(f=message.getStatus())&&writer.writeEnum(5,f),null!=(f=message.getMemberCount())&&writer.writeMessage(6,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(f=message.getReferenceCount())&&writer.writeMessage(7,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter)},proto.google.ads.googleads.v1.resources.SharedSet.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v1.resources.SharedSet.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v1.resources.SharedSet.prototype.getId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,2)},proto.google.ads.googleads.v1.resources.SharedSet.prototype.setId=function(value){jspb.Message.setWrapperField(this,2,value)},proto.google.ads.googleads.v1.resources.SharedSet.prototype.clearId=function(){this.setId(void 0)},proto.google.ads.googleads.v1.resources.SharedSet.prototype.hasId=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v1.resources.SharedSet.prototype.getType=function(){return jspb.Message.getFieldWithDefault(this,3,0)},proto.google.ads.googleads.v1.resources.SharedSet.prototype.setType=function(value){jspb.Message.setProto3EnumField(this,3,value)},proto.google.ads.googleads.v1.resources.SharedSet.prototype.getName=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,4)},proto.google.ads.googleads.v1.resources.SharedSet.prototype.setName=function(value){jspb.Message.setWrapperField(this,4,value)},proto.google.ads.googleads.v1.resources.SharedSet.prototype.clearName=function(){this.setName(void 0)},proto.google.ads.googleads.v1.resources.SharedSet.prototype.hasName=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v1.resources.SharedSet.prototype.getStatus=function(){return jspb.Message.getFieldWithDefault(this,5,0)},proto.google.ads.googleads.v1.resources.SharedSet.prototype.setStatus=function(value){jspb.Message.setProto3EnumField(this,5,value)},proto.google.ads.googleads.v1.resources.SharedSet.prototype.getMemberCount=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,6)},proto.google.ads.googleads.v1.resources.SharedSet.prototype.setMemberCount=function(value){jspb.Message.setWrapperField(this,6,value)},proto.google.ads.googleads.v1.resources.SharedSet.prototype.clearMemberCount=function(){this.setMemberCount(void 0)},proto.google.ads.googleads.v1.resources.SharedSet.prototype.hasMemberCount=function(){return null!=jspb.Message.getField(this,6)},proto.google.ads.googleads.v1.resources.SharedSet.prototype.getReferenceCount=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,7)},proto.google.ads.googleads.v1.resources.SharedSet.prototype.setReferenceCount=function(value){jspb.Message.setWrapperField(this,7,value)},proto.google.ads.googleads.v1.resources.SharedSet.prototype.clearReferenceCount=function(){this.setReferenceCount(void 0)},proto.google.ads.googleads.v1.resources.SharedSet.prototype.hasReferenceCount=function(){return null!=jspb.Message.getField(this,7)},goog.object.extend(exports,proto.google.ads.googleads.v1.resources);