var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v1_resources_campaign_criterion_pb=require("../../../../../google/ads/googleads/v1/resources/campaign_criterion_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_protobuf_field_mask_pb=require("google-protobuf/google/protobuf/field_mask_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_rpc_status_pb=require("../../../../../google/rpc/status_pb.js");goog.exportSymbol("proto.google.ads.googleads.v1.services.CampaignCriterionOperation",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.services.GetCampaignCriterionRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.services.MutateCampaignCriteriaRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.services.MutateCampaignCriteriaResponse",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.services.MutateCampaignCriterionResult",null,global),proto.google.ads.googleads.v1.services.GetCampaignCriterionRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.services.GetCampaignCriterionRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.services.GetCampaignCriterionRequest.displayName="proto.google.ads.googleads.v1.services.GetCampaignCriterionRequest"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.services.GetCampaignCriterionRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.services.GetCampaignCriterionRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.services.GetCampaignCriterionRequest.toObject=function(includeInstance,msg){var obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.services.GetCampaignCriterionRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.services.GetCampaignCriterionRequest;return proto.google.ads.googleads.v1.services.GetCampaignCriterionRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.services.GetCampaignCriterionRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.services.GetCampaignCriterionRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.services.GetCampaignCriterionRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.services.GetCampaignCriterionRequest.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResourceName()).length&&writer.writeString(1,f)},proto.google.ads.googleads.v1.services.GetCampaignCriterionRequest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v1.services.GetCampaignCriterionRequest.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v1.services.MutateCampaignCriteriaRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v1.services.MutateCampaignCriteriaRequest.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v1.services.MutateCampaignCriteriaRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.services.MutateCampaignCriteriaRequest.displayName="proto.google.ads.googleads.v1.services.MutateCampaignCriteriaRequest"),proto.google.ads.googleads.v1.services.MutateCampaignCriteriaRequest.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.services.MutateCampaignCriteriaRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.services.MutateCampaignCriteriaRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.services.MutateCampaignCriteriaRequest.toObject=function(includeInstance,msg){var obj={customerId:jspb.Message.getFieldWithDefault(msg,1,""),operationsList:jspb.Message.toObjectList(msg.getOperationsList(),proto.google.ads.googleads.v1.services.CampaignCriterionOperation.toObject,includeInstance),partialFailure:jspb.Message.getFieldWithDefault(msg,3,!1),validateOnly:jspb.Message.getFieldWithDefault(msg,4,!1)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.services.MutateCampaignCriteriaRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.services.MutateCampaignCriteriaRequest;return proto.google.ads.googleads.v1.services.MutateCampaignCriteriaRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.services.MutateCampaignCriteriaRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setCustomerId(value);break;case 2:value=new proto.google.ads.googleads.v1.services.CampaignCriterionOperation;reader.readMessage(value,proto.google.ads.googleads.v1.services.CampaignCriterionOperation.deserializeBinaryFromReader),msg.addOperations(value);break;case 3:value=reader.readBool();msg.setPartialFailure(value);break;case 4:value=reader.readBool();msg.setValidateOnly(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.services.MutateCampaignCriteriaRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.services.MutateCampaignCriteriaRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.services.MutateCampaignCriteriaRequest.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getCustomerId()).length&&writer.writeString(1,f),0<(f=message.getOperationsList()).length&&writer.writeRepeatedMessage(2,f,proto.google.ads.googleads.v1.services.CampaignCriterionOperation.serializeBinaryToWriter),(f=message.getPartialFailure())&&writer.writeBool(3,f),(f=message.getValidateOnly())&&writer.writeBool(4,f)},proto.google.ads.googleads.v1.services.MutateCampaignCriteriaRequest.prototype.getCustomerId=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v1.services.MutateCampaignCriteriaRequest.prototype.setCustomerId=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v1.services.MutateCampaignCriteriaRequest.prototype.getOperationsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v1.services.CampaignCriterionOperation,2)},proto.google.ads.googleads.v1.services.MutateCampaignCriteriaRequest.prototype.setOperationsList=function(value){jspb.Message.setRepeatedWrapperField(this,2,value)},proto.google.ads.googleads.v1.services.MutateCampaignCriteriaRequest.prototype.addOperations=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,2,opt_value,proto.google.ads.googleads.v1.services.CampaignCriterionOperation,opt_index)},proto.google.ads.googleads.v1.services.MutateCampaignCriteriaRequest.prototype.clearOperationsList=function(){this.setOperationsList([])},proto.google.ads.googleads.v1.services.MutateCampaignCriteriaRequest.prototype.getPartialFailure=function(){return jspb.Message.getFieldWithDefault(this,3,!1)},proto.google.ads.googleads.v1.services.MutateCampaignCriteriaRequest.prototype.setPartialFailure=function(value){jspb.Message.setProto3BooleanField(this,3,value)},proto.google.ads.googleads.v1.services.MutateCampaignCriteriaRequest.prototype.getValidateOnly=function(){return jspb.Message.getFieldWithDefault(this,4,!1)},proto.google.ads.googleads.v1.services.MutateCampaignCriteriaRequest.prototype.setValidateOnly=function(value){jspb.Message.setProto3BooleanField(this,4,value)},proto.google.ads.googleads.v1.services.CampaignCriterionOperation=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,proto.google.ads.googleads.v1.services.CampaignCriterionOperation.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v1.services.CampaignCriterionOperation,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.services.CampaignCriterionOperation.displayName="proto.google.ads.googleads.v1.services.CampaignCriterionOperation"),proto.google.ads.googleads.v1.services.CampaignCriterionOperation.oneofGroups_=[[1,2,3]],proto.google.ads.googleads.v1.services.CampaignCriterionOperation.OperationCase={OPERATION_NOT_SET:0,CREATE:1,UPDATE:2,REMOVE:3},proto.google.ads.googleads.v1.services.CampaignCriterionOperation.prototype.getOperationCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v1.services.CampaignCriterionOperation.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.services.CampaignCriterionOperation.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.services.CampaignCriterionOperation.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.services.CampaignCriterionOperation.toObject=function(includeInstance,msg){var f,obj={updateMask:(f=msg.getUpdateMask())&&google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance,f),create:(f=msg.getCreate())&&google_ads_googleads_v1_resources_campaign_criterion_pb.CampaignCriterion.toObject(includeInstance,f),update:(f=msg.getUpdate())&&google_ads_googleads_v1_resources_campaign_criterion_pb.CampaignCriterion.toObject(includeInstance,f),remove:jspb.Message.getFieldWithDefault(msg,3,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.services.CampaignCriterionOperation.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.services.CampaignCriterionOperation;return proto.google.ads.googleads.v1.services.CampaignCriterionOperation.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.services.CampaignCriterionOperation.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 4:var value=new google_protobuf_field_mask_pb.FieldMask;reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader),msg.setUpdateMask(value);break;case 1:value=new google_ads_googleads_v1_resources_campaign_criterion_pb.CampaignCriterion;reader.readMessage(value,google_ads_googleads_v1_resources_campaign_criterion_pb.CampaignCriterion.deserializeBinaryFromReader),msg.setCreate(value);break;case 2:value=new google_ads_googleads_v1_resources_campaign_criterion_pb.CampaignCriterion;reader.readMessage(value,google_ads_googleads_v1_resources_campaign_criterion_pb.CampaignCriterion.deserializeBinaryFromReader),msg.setUpdate(value);break;case 3:value=reader.readString();msg.setRemove(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.services.CampaignCriterionOperation.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.services.CampaignCriterionOperation.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.services.CampaignCriterionOperation.serializeBinaryToWriter=function(message,writer){var f=void 0;null!=(f=message.getUpdateMask())&&writer.writeMessage(4,f,google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter),null!=(f=message.getCreate())&&writer.writeMessage(1,f,google_ads_googleads_v1_resources_campaign_criterion_pb.CampaignCriterion.serializeBinaryToWriter),null!=(f=message.getUpdate())&&writer.writeMessage(2,f,google_ads_googleads_v1_resources_campaign_criterion_pb.CampaignCriterion.serializeBinaryToWriter),null!=(f=jspb.Message.getField(message,3))&&writer.writeString(3,f)},proto.google.ads.googleads.v1.services.CampaignCriterionOperation.prototype.getUpdateMask=function(){return jspb.Message.getWrapperField(this,google_protobuf_field_mask_pb.FieldMask,4)},proto.google.ads.googleads.v1.services.CampaignCriterionOperation.prototype.setUpdateMask=function(value){jspb.Message.setWrapperField(this,4,value)},proto.google.ads.googleads.v1.services.CampaignCriterionOperation.prototype.clearUpdateMask=function(){this.setUpdateMask(void 0)},proto.google.ads.googleads.v1.services.CampaignCriterionOperation.prototype.hasUpdateMask=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v1.services.CampaignCriterionOperation.prototype.getCreate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v1_resources_campaign_criterion_pb.CampaignCriterion,1)},proto.google.ads.googleads.v1.services.CampaignCriterionOperation.prototype.setCreate=function(value){jspb.Message.setOneofWrapperField(this,1,proto.google.ads.googleads.v1.services.CampaignCriterionOperation.oneofGroups_[0],value)},proto.google.ads.googleads.v1.services.CampaignCriterionOperation.prototype.clearCreate=function(){this.setCreate(void 0)},proto.google.ads.googleads.v1.services.CampaignCriterionOperation.prototype.hasCreate=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v1.services.CampaignCriterionOperation.prototype.getUpdate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v1_resources_campaign_criterion_pb.CampaignCriterion,2)},proto.google.ads.googleads.v1.services.CampaignCriterionOperation.prototype.setUpdate=function(value){jspb.Message.setOneofWrapperField(this,2,proto.google.ads.googleads.v1.services.CampaignCriterionOperation.oneofGroups_[0],value)},proto.google.ads.googleads.v1.services.CampaignCriterionOperation.prototype.clearUpdate=function(){this.setUpdate(void 0)},proto.google.ads.googleads.v1.services.CampaignCriterionOperation.prototype.hasUpdate=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v1.services.CampaignCriterionOperation.prototype.getRemove=function(){return jspb.Message.getFieldWithDefault(this,3,"")},proto.google.ads.googleads.v1.services.CampaignCriterionOperation.prototype.setRemove=function(value){jspb.Message.setOneofField(this,3,proto.google.ads.googleads.v1.services.CampaignCriterionOperation.oneofGroups_[0],value)},proto.google.ads.googleads.v1.services.CampaignCriterionOperation.prototype.clearRemove=function(){jspb.Message.setOneofField(this,3,proto.google.ads.googleads.v1.services.CampaignCriterionOperation.oneofGroups_[0],void 0)},proto.google.ads.googleads.v1.services.CampaignCriterionOperation.prototype.hasRemove=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v1.services.MutateCampaignCriteriaResponse=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v1.services.MutateCampaignCriteriaResponse.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v1.services.MutateCampaignCriteriaResponse,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.services.MutateCampaignCriteriaResponse.displayName="proto.google.ads.googleads.v1.services.MutateCampaignCriteriaResponse"),proto.google.ads.googleads.v1.services.MutateCampaignCriteriaResponse.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.services.MutateCampaignCriteriaResponse.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.services.MutateCampaignCriteriaResponse.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.services.MutateCampaignCriteriaResponse.toObject=function(includeInstance,msg){var f,obj={partialFailureError:(f=msg.getPartialFailureError())&&google_rpc_status_pb.Status.toObject(includeInstance,f),resultsList:jspb.Message.toObjectList(msg.getResultsList(),proto.google.ads.googleads.v1.services.MutateCampaignCriterionResult.toObject,includeInstance)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.services.MutateCampaignCriteriaResponse.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.services.MutateCampaignCriteriaResponse;return proto.google.ads.googleads.v1.services.MutateCampaignCriteriaResponse.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.services.MutateCampaignCriteriaResponse.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 3:var value=new google_rpc_status_pb.Status;reader.readMessage(value,google_rpc_status_pb.Status.deserializeBinaryFromReader),msg.setPartialFailureError(value);break;case 2:value=new proto.google.ads.googleads.v1.services.MutateCampaignCriterionResult;reader.readMessage(value,proto.google.ads.googleads.v1.services.MutateCampaignCriterionResult.deserializeBinaryFromReader),msg.addResults(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.services.MutateCampaignCriteriaResponse.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.services.MutateCampaignCriteriaResponse.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.services.MutateCampaignCriteriaResponse.serializeBinaryToWriter=function(message,writer){var f=void 0;null!=(f=message.getPartialFailureError())&&writer.writeMessage(3,f,google_rpc_status_pb.Status.serializeBinaryToWriter),0<(f=message.getResultsList()).length&&writer.writeRepeatedMessage(2,f,proto.google.ads.googleads.v1.services.MutateCampaignCriterionResult.serializeBinaryToWriter)},proto.google.ads.googleads.v1.services.MutateCampaignCriteriaResponse.prototype.getPartialFailureError=function(){return jspb.Message.getWrapperField(this,google_rpc_status_pb.Status,3)},proto.google.ads.googleads.v1.services.MutateCampaignCriteriaResponse.prototype.setPartialFailureError=function(value){jspb.Message.setWrapperField(this,3,value)},proto.google.ads.googleads.v1.services.MutateCampaignCriteriaResponse.prototype.clearPartialFailureError=function(){this.setPartialFailureError(void 0)},proto.google.ads.googleads.v1.services.MutateCampaignCriteriaResponse.prototype.hasPartialFailureError=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v1.services.MutateCampaignCriteriaResponse.prototype.getResultsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v1.services.MutateCampaignCriterionResult,2)},proto.google.ads.googleads.v1.services.MutateCampaignCriteriaResponse.prototype.setResultsList=function(value){jspb.Message.setRepeatedWrapperField(this,2,value)},proto.google.ads.googleads.v1.services.MutateCampaignCriteriaResponse.prototype.addResults=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,2,opt_value,proto.google.ads.googleads.v1.services.MutateCampaignCriterionResult,opt_index)},proto.google.ads.googleads.v1.services.MutateCampaignCriteriaResponse.prototype.clearResultsList=function(){this.setResultsList([])},proto.google.ads.googleads.v1.services.MutateCampaignCriterionResult=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.services.MutateCampaignCriterionResult,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.services.MutateCampaignCriterionResult.displayName="proto.google.ads.googleads.v1.services.MutateCampaignCriterionResult"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.services.MutateCampaignCriterionResult.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.services.MutateCampaignCriterionResult.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.services.MutateCampaignCriterionResult.toObject=function(includeInstance,msg){var obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.services.MutateCampaignCriterionResult.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.services.MutateCampaignCriterionResult;return proto.google.ads.googleads.v1.services.MutateCampaignCriterionResult.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.services.MutateCampaignCriterionResult.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.services.MutateCampaignCriterionResult.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.services.MutateCampaignCriterionResult.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.services.MutateCampaignCriterionResult.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResourceName()).length&&writer.writeString(1,f)},proto.google.ads.googleads.v1.services.MutateCampaignCriterionResult.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v1.services.MutateCampaignCriterionResult.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},goog.object.extend(exports,proto.google.ads.googleads.v1.services);