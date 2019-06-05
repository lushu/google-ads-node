var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v1_resources_campaign_bid_modifier_pb=require("../../../../../google/ads/googleads/v1/resources/campaign_bid_modifier_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_protobuf_field_mask_pb=require("google-protobuf/google/protobuf/field_mask_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_rpc_status_pb=require("../../../../../google/rpc/status_pb.js");goog.exportSymbol("proto.google.ads.googleads.v1.services.CampaignBidModifierOperation",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.services.GetCampaignBidModifierRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.services.MutateCampaignBidModifierResult",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersResponse",null,global),proto.google.ads.googleads.v1.services.GetCampaignBidModifierRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.services.GetCampaignBidModifierRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.services.GetCampaignBidModifierRequest.displayName="proto.google.ads.googleads.v1.services.GetCampaignBidModifierRequest"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.services.GetCampaignBidModifierRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.services.GetCampaignBidModifierRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.services.GetCampaignBidModifierRequest.toObject=function(includeInstance,msg){var obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.services.GetCampaignBidModifierRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.services.GetCampaignBidModifierRequest;return proto.google.ads.googleads.v1.services.GetCampaignBidModifierRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.services.GetCampaignBidModifierRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.services.GetCampaignBidModifierRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.services.GetCampaignBidModifierRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.services.GetCampaignBidModifierRequest.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResourceName()).length&&writer.writeString(1,f)},proto.google.ads.googleads.v1.services.GetCampaignBidModifierRequest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v1.services.GetCampaignBidModifierRequest.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersRequest.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersRequest.displayName="proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersRequest"),proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersRequest.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersRequest.toObject=function(includeInstance,msg){var obj={customerId:jspb.Message.getFieldWithDefault(msg,1,""),operationsList:jspb.Message.toObjectList(msg.getOperationsList(),proto.google.ads.googleads.v1.services.CampaignBidModifierOperation.toObject,includeInstance),partialFailure:jspb.Message.getFieldWithDefault(msg,3,!1),validateOnly:jspb.Message.getFieldWithDefault(msg,4,!1)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersRequest;return proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setCustomerId(value);break;case 2:value=new proto.google.ads.googleads.v1.services.CampaignBidModifierOperation;reader.readMessage(value,proto.google.ads.googleads.v1.services.CampaignBidModifierOperation.deserializeBinaryFromReader),msg.addOperations(value);break;case 3:value=reader.readBool();msg.setPartialFailure(value);break;case 4:value=reader.readBool();msg.setValidateOnly(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersRequest.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getCustomerId()).length&&writer.writeString(1,f),0<(f=message.getOperationsList()).length&&writer.writeRepeatedMessage(2,f,proto.google.ads.googleads.v1.services.CampaignBidModifierOperation.serializeBinaryToWriter),(f=message.getPartialFailure())&&writer.writeBool(3,f),(f=message.getValidateOnly())&&writer.writeBool(4,f)},proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersRequest.prototype.getCustomerId=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersRequest.prototype.setCustomerId=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersRequest.prototype.getOperationsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v1.services.CampaignBidModifierOperation,2)},proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersRequest.prototype.setOperationsList=function(value){jspb.Message.setRepeatedWrapperField(this,2,value)},proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersRequest.prototype.addOperations=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,2,opt_value,proto.google.ads.googleads.v1.services.CampaignBidModifierOperation,opt_index)},proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersRequest.prototype.clearOperationsList=function(){this.setOperationsList([])},proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersRequest.prototype.getPartialFailure=function(){return jspb.Message.getFieldWithDefault(this,3,!1)},proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersRequest.prototype.setPartialFailure=function(value){jspb.Message.setProto3BooleanField(this,3,value)},proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersRequest.prototype.getValidateOnly=function(){return jspb.Message.getFieldWithDefault(this,4,!1)},proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersRequest.prototype.setValidateOnly=function(value){jspb.Message.setProto3BooleanField(this,4,value)},proto.google.ads.googleads.v1.services.CampaignBidModifierOperation=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,proto.google.ads.googleads.v1.services.CampaignBidModifierOperation.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v1.services.CampaignBidModifierOperation,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.services.CampaignBidModifierOperation.displayName="proto.google.ads.googleads.v1.services.CampaignBidModifierOperation"),proto.google.ads.googleads.v1.services.CampaignBidModifierOperation.oneofGroups_=[[1,2,3]],proto.google.ads.googleads.v1.services.CampaignBidModifierOperation.OperationCase={OPERATION_NOT_SET:0,CREATE:1,UPDATE:2,REMOVE:3},proto.google.ads.googleads.v1.services.CampaignBidModifierOperation.prototype.getOperationCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v1.services.CampaignBidModifierOperation.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.services.CampaignBidModifierOperation.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.services.CampaignBidModifierOperation.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.services.CampaignBidModifierOperation.toObject=function(includeInstance,msg){var f,obj={updateMask:(f=msg.getUpdateMask())&&google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance,f),create:(f=msg.getCreate())&&google_ads_googleads_v1_resources_campaign_bid_modifier_pb.CampaignBidModifier.toObject(includeInstance,f),update:(f=msg.getUpdate())&&google_ads_googleads_v1_resources_campaign_bid_modifier_pb.CampaignBidModifier.toObject(includeInstance,f),remove:jspb.Message.getFieldWithDefault(msg,3,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.services.CampaignBidModifierOperation.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.services.CampaignBidModifierOperation;return proto.google.ads.googleads.v1.services.CampaignBidModifierOperation.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.services.CampaignBidModifierOperation.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 4:var value=new google_protobuf_field_mask_pb.FieldMask;reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader),msg.setUpdateMask(value);break;case 1:value=new google_ads_googleads_v1_resources_campaign_bid_modifier_pb.CampaignBidModifier;reader.readMessage(value,google_ads_googleads_v1_resources_campaign_bid_modifier_pb.CampaignBidModifier.deserializeBinaryFromReader),msg.setCreate(value);break;case 2:value=new google_ads_googleads_v1_resources_campaign_bid_modifier_pb.CampaignBidModifier;reader.readMessage(value,google_ads_googleads_v1_resources_campaign_bid_modifier_pb.CampaignBidModifier.deserializeBinaryFromReader),msg.setUpdate(value);break;case 3:value=reader.readString();msg.setRemove(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.services.CampaignBidModifierOperation.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.services.CampaignBidModifierOperation.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.services.CampaignBidModifierOperation.serializeBinaryToWriter=function(message,writer){var f=void 0;null!=(f=message.getUpdateMask())&&writer.writeMessage(4,f,google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter),null!=(f=message.getCreate())&&writer.writeMessage(1,f,google_ads_googleads_v1_resources_campaign_bid_modifier_pb.CampaignBidModifier.serializeBinaryToWriter),null!=(f=message.getUpdate())&&writer.writeMessage(2,f,google_ads_googleads_v1_resources_campaign_bid_modifier_pb.CampaignBidModifier.serializeBinaryToWriter),null!=(f=jspb.Message.getField(message,3))&&writer.writeString(3,f)},proto.google.ads.googleads.v1.services.CampaignBidModifierOperation.prototype.getUpdateMask=function(){return jspb.Message.getWrapperField(this,google_protobuf_field_mask_pb.FieldMask,4)},proto.google.ads.googleads.v1.services.CampaignBidModifierOperation.prototype.setUpdateMask=function(value){jspb.Message.setWrapperField(this,4,value)},proto.google.ads.googleads.v1.services.CampaignBidModifierOperation.prototype.clearUpdateMask=function(){this.setUpdateMask(void 0)},proto.google.ads.googleads.v1.services.CampaignBidModifierOperation.prototype.hasUpdateMask=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v1.services.CampaignBidModifierOperation.prototype.getCreate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v1_resources_campaign_bid_modifier_pb.CampaignBidModifier,1)},proto.google.ads.googleads.v1.services.CampaignBidModifierOperation.prototype.setCreate=function(value){jspb.Message.setOneofWrapperField(this,1,proto.google.ads.googleads.v1.services.CampaignBidModifierOperation.oneofGroups_[0],value)},proto.google.ads.googleads.v1.services.CampaignBidModifierOperation.prototype.clearCreate=function(){this.setCreate(void 0)},proto.google.ads.googleads.v1.services.CampaignBidModifierOperation.prototype.hasCreate=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v1.services.CampaignBidModifierOperation.prototype.getUpdate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v1_resources_campaign_bid_modifier_pb.CampaignBidModifier,2)},proto.google.ads.googleads.v1.services.CampaignBidModifierOperation.prototype.setUpdate=function(value){jspb.Message.setOneofWrapperField(this,2,proto.google.ads.googleads.v1.services.CampaignBidModifierOperation.oneofGroups_[0],value)},proto.google.ads.googleads.v1.services.CampaignBidModifierOperation.prototype.clearUpdate=function(){this.setUpdate(void 0)},proto.google.ads.googleads.v1.services.CampaignBidModifierOperation.prototype.hasUpdate=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v1.services.CampaignBidModifierOperation.prototype.getRemove=function(){return jspb.Message.getFieldWithDefault(this,3,"")},proto.google.ads.googleads.v1.services.CampaignBidModifierOperation.prototype.setRemove=function(value){jspb.Message.setOneofField(this,3,proto.google.ads.googleads.v1.services.CampaignBidModifierOperation.oneofGroups_[0],value)},proto.google.ads.googleads.v1.services.CampaignBidModifierOperation.prototype.clearRemove=function(){jspb.Message.setOneofField(this,3,proto.google.ads.googleads.v1.services.CampaignBidModifierOperation.oneofGroups_[0],void 0)},proto.google.ads.googleads.v1.services.CampaignBidModifierOperation.prototype.hasRemove=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersResponse=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersResponse.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersResponse,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersResponse.displayName="proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersResponse"),proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersResponse.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersResponse.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersResponse.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersResponse.toObject=function(includeInstance,msg){var f,obj={partialFailureError:(f=msg.getPartialFailureError())&&google_rpc_status_pb.Status.toObject(includeInstance,f),resultsList:jspb.Message.toObjectList(msg.getResultsList(),proto.google.ads.googleads.v1.services.MutateCampaignBidModifierResult.toObject,includeInstance)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersResponse.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersResponse;return proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersResponse.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersResponse.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 3:var value=new google_rpc_status_pb.Status;reader.readMessage(value,google_rpc_status_pb.Status.deserializeBinaryFromReader),msg.setPartialFailureError(value);break;case 2:value=new proto.google.ads.googleads.v1.services.MutateCampaignBidModifierResult;reader.readMessage(value,proto.google.ads.googleads.v1.services.MutateCampaignBidModifierResult.deserializeBinaryFromReader),msg.addResults(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersResponse.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersResponse.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersResponse.serializeBinaryToWriter=function(message,writer){var f=void 0;null!=(f=message.getPartialFailureError())&&writer.writeMessage(3,f,google_rpc_status_pb.Status.serializeBinaryToWriter),0<(f=message.getResultsList()).length&&writer.writeRepeatedMessage(2,f,proto.google.ads.googleads.v1.services.MutateCampaignBidModifierResult.serializeBinaryToWriter)},proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersResponse.prototype.getPartialFailureError=function(){return jspb.Message.getWrapperField(this,google_rpc_status_pb.Status,3)},proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersResponse.prototype.setPartialFailureError=function(value){jspb.Message.setWrapperField(this,3,value)},proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersResponse.prototype.clearPartialFailureError=function(){this.setPartialFailureError(void 0)},proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersResponse.prototype.hasPartialFailureError=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersResponse.prototype.getResultsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v1.services.MutateCampaignBidModifierResult,2)},proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersResponse.prototype.setResultsList=function(value){jspb.Message.setRepeatedWrapperField(this,2,value)},proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersResponse.prototype.addResults=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,2,opt_value,proto.google.ads.googleads.v1.services.MutateCampaignBidModifierResult,opt_index)},proto.google.ads.googleads.v1.services.MutateCampaignBidModifiersResponse.prototype.clearResultsList=function(){this.setResultsList([])},proto.google.ads.googleads.v1.services.MutateCampaignBidModifierResult=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.services.MutateCampaignBidModifierResult,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.services.MutateCampaignBidModifierResult.displayName="proto.google.ads.googleads.v1.services.MutateCampaignBidModifierResult"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.services.MutateCampaignBidModifierResult.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.services.MutateCampaignBidModifierResult.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.services.MutateCampaignBidModifierResult.toObject=function(includeInstance,msg){var obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.services.MutateCampaignBidModifierResult.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.services.MutateCampaignBidModifierResult;return proto.google.ads.googleads.v1.services.MutateCampaignBidModifierResult.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.services.MutateCampaignBidModifierResult.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.services.MutateCampaignBidModifierResult.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.services.MutateCampaignBidModifierResult.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.services.MutateCampaignBidModifierResult.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResourceName()).length&&writer.writeString(1,f)},proto.google.ads.googleads.v1.services.MutateCampaignBidModifierResult.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v1.services.MutateCampaignBidModifierResult.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},goog.object.extend(exports,proto.google.ads.googleads.v1.services);