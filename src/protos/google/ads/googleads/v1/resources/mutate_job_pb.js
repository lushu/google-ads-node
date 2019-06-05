var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v1_enums_mutate_job_status_pb=require("../../../../../google/ads/googleads/v1/enums/mutate_job_status_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v1.resources.MutateJob",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata",null,global),proto.google.ads.googleads.v1.resources.MutateJob=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.resources.MutateJob,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.resources.MutateJob.displayName="proto.google.ads.googleads.v1.resources.MutateJob"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.resources.MutateJob.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.resources.MutateJob.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.resources.MutateJob.toObject=function(includeInstance,msg){var f,obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,""),id:(f=msg.getId())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),nextAddSequenceToken:(f=msg.getNextAddSequenceToken())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),metadata:(f=msg.getMetadata())&&proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.toObject(includeInstance,f),status:jspb.Message.getFieldWithDefault(msg,5,0),longRunningOperation:(f=msg.getLongRunningOperation())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.resources.MutateJob.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.resources.MutateJob;return proto.google.ads.googleads.v1.resources.MutateJob.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.resources.MutateJob.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;case 2:value=new google_protobuf_wrappers_pb.Int64Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setId(value);break;case 3:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setNextAddSequenceToken(value);break;case 4:value=new proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata;reader.readMessage(value,proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.deserializeBinaryFromReader),msg.setMetadata(value);break;case 5:value=reader.readEnum();msg.setStatus(value);break;case 6:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setLongRunningOperation(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.resources.MutateJob.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.resources.MutateJob.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.resources.MutateJob.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getResourceName()).length&&writer.writeString(1,f),null!=(f=message.getId())&&writer.writeMessage(2,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(f=message.getNextAddSequenceToken())&&writer.writeMessage(3,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getMetadata())&&writer.writeMessage(4,f,proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.serializeBinaryToWriter),0!==(f=message.getStatus())&&writer.writeEnum(5,f),null!=(f=message.getLongRunningOperation())&&writer.writeMessage(6,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter)},proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.displayName="proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.toObject=function(includeInstance,msg){var f,obj={creationDateTime:(f=msg.getCreationDateTime())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),completionDateTime:(f=msg.getCompletionDateTime())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),estimatedCompletionRatio:(f=msg.getEstimatedCompletionRatio())&&google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance,f),operationCount:(f=msg.getOperationCount())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),executedOperationCount:(f=msg.getExecutedOperationCount())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata;return proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setCreationDateTime(value);break;case 2:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setCompletionDateTime(value);break;case 3:value=new google_protobuf_wrappers_pb.DoubleValue;reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader),msg.setEstimatedCompletionRatio(value);break;case 4:value=new google_protobuf_wrappers_pb.Int64Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setOperationCount(value);break;case 5:value=new google_protobuf_wrappers_pb.Int64Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setExecutedOperationCount(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.serializeBinaryToWriter=function(message,writer){var f=void 0;null!=(f=message.getCreationDateTime())&&writer.writeMessage(1,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getCompletionDateTime())&&writer.writeMessage(2,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getEstimatedCompletionRatio())&&writer.writeMessage(3,f,google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter),null!=(f=message.getOperationCount())&&writer.writeMessage(4,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(f=message.getExecutedOperationCount())&&writer.writeMessage(5,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter)},proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.prototype.getCreationDateTime=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,1)},proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.prototype.setCreationDateTime=function(value){jspb.Message.setWrapperField(this,1,value)},proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.prototype.clearCreationDateTime=function(){this.setCreationDateTime(void 0)},proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.prototype.hasCreationDateTime=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.prototype.getCompletionDateTime=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,2)},proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.prototype.setCompletionDateTime=function(value){jspb.Message.setWrapperField(this,2,value)},proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.prototype.clearCompletionDateTime=function(){this.setCompletionDateTime(void 0)},proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.prototype.hasCompletionDateTime=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.prototype.getEstimatedCompletionRatio=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.DoubleValue,3)},proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.prototype.setEstimatedCompletionRatio=function(value){jspb.Message.setWrapperField(this,3,value)},proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.prototype.clearEstimatedCompletionRatio=function(){this.setEstimatedCompletionRatio(void 0)},proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.prototype.hasEstimatedCompletionRatio=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.prototype.getOperationCount=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,4)},proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.prototype.setOperationCount=function(value){jspb.Message.setWrapperField(this,4,value)},proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.prototype.clearOperationCount=function(){this.setOperationCount(void 0)},proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.prototype.hasOperationCount=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.prototype.getExecutedOperationCount=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,5)},proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.prototype.setExecutedOperationCount=function(value){jspb.Message.setWrapperField(this,5,value)},proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.prototype.clearExecutedOperationCount=function(){this.setExecutedOperationCount(void 0)},proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata.prototype.hasExecutedOperationCount=function(){return null!=jspb.Message.getField(this,5)},proto.google.ads.googleads.v1.resources.MutateJob.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v1.resources.MutateJob.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v1.resources.MutateJob.prototype.getId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,2)},proto.google.ads.googleads.v1.resources.MutateJob.prototype.setId=function(value){jspb.Message.setWrapperField(this,2,value)},proto.google.ads.googleads.v1.resources.MutateJob.prototype.clearId=function(){this.setId(void 0)},proto.google.ads.googleads.v1.resources.MutateJob.prototype.hasId=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v1.resources.MutateJob.prototype.getNextAddSequenceToken=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,3)},proto.google.ads.googleads.v1.resources.MutateJob.prototype.setNextAddSequenceToken=function(value){jspb.Message.setWrapperField(this,3,value)},proto.google.ads.googleads.v1.resources.MutateJob.prototype.clearNextAddSequenceToken=function(){this.setNextAddSequenceToken(void 0)},proto.google.ads.googleads.v1.resources.MutateJob.prototype.hasNextAddSequenceToken=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v1.resources.MutateJob.prototype.getMetadata=function(){return jspb.Message.getWrapperField(this,proto.google.ads.googleads.v1.resources.MutateJob.MutateJobMetadata,4)},proto.google.ads.googleads.v1.resources.MutateJob.prototype.setMetadata=function(value){jspb.Message.setWrapperField(this,4,value)},proto.google.ads.googleads.v1.resources.MutateJob.prototype.clearMetadata=function(){this.setMetadata(void 0)},proto.google.ads.googleads.v1.resources.MutateJob.prototype.hasMetadata=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v1.resources.MutateJob.prototype.getStatus=function(){return jspb.Message.getFieldWithDefault(this,5,0)},proto.google.ads.googleads.v1.resources.MutateJob.prototype.setStatus=function(value){jspb.Message.setProto3EnumField(this,5,value)},proto.google.ads.googleads.v1.resources.MutateJob.prototype.getLongRunningOperation=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,6)},proto.google.ads.googleads.v1.resources.MutateJob.prototype.setLongRunningOperation=function(value){jspb.Message.setWrapperField(this,6,value)},proto.google.ads.googleads.v1.resources.MutateJob.prototype.clearLongRunningOperation=function(){this.setLongRunningOperation(void 0)},proto.google.ads.googleads.v1.resources.MutateJob.prototype.hasLongRunningOperation=function(){return null!=jspb.Message.getField(this,6)},goog.object.extend(exports,proto.google.ads.googleads.v1.resources);