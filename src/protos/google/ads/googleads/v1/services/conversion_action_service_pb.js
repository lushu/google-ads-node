var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v1_resources_conversion_action_pb=require("../../../../../google/ads/googleads/v1/resources/conversion_action_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_protobuf_field_mask_pb=require("google-protobuf/google/protobuf/field_mask_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_rpc_status_pb=require("../../../../../google/rpc/status_pb.js");goog.exportSymbol("proto.google.ads.googleads.v1.services.ConversionActionOperation",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.services.GetConversionActionRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.services.MutateConversionActionResult",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.services.MutateConversionActionsRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.services.MutateConversionActionsResponse",null,global),proto.google.ads.googleads.v1.services.GetConversionActionRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.services.GetConversionActionRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.services.GetConversionActionRequest.displayName="proto.google.ads.googleads.v1.services.GetConversionActionRequest"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.services.GetConversionActionRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.services.GetConversionActionRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.services.GetConversionActionRequest.toObject=function(includeInstance,msg){var obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.services.GetConversionActionRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.services.GetConversionActionRequest;return proto.google.ads.googleads.v1.services.GetConversionActionRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.services.GetConversionActionRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.services.GetConversionActionRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.services.GetConversionActionRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.services.GetConversionActionRequest.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResourceName()).length&&writer.writeString(1,f)},proto.google.ads.googleads.v1.services.GetConversionActionRequest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v1.services.GetConversionActionRequest.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v1.services.MutateConversionActionsRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v1.services.MutateConversionActionsRequest.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v1.services.MutateConversionActionsRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.services.MutateConversionActionsRequest.displayName="proto.google.ads.googleads.v1.services.MutateConversionActionsRequest"),proto.google.ads.googleads.v1.services.MutateConversionActionsRequest.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.services.MutateConversionActionsRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.services.MutateConversionActionsRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.services.MutateConversionActionsRequest.toObject=function(includeInstance,msg){var obj={customerId:jspb.Message.getFieldWithDefault(msg,1,""),operationsList:jspb.Message.toObjectList(msg.getOperationsList(),proto.google.ads.googleads.v1.services.ConversionActionOperation.toObject,includeInstance),partialFailure:jspb.Message.getFieldWithDefault(msg,3,!1),validateOnly:jspb.Message.getFieldWithDefault(msg,4,!1)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.services.MutateConversionActionsRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.services.MutateConversionActionsRequest;return proto.google.ads.googleads.v1.services.MutateConversionActionsRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.services.MutateConversionActionsRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setCustomerId(value);break;case 2:value=new proto.google.ads.googleads.v1.services.ConversionActionOperation;reader.readMessage(value,proto.google.ads.googleads.v1.services.ConversionActionOperation.deserializeBinaryFromReader),msg.addOperations(value);break;case 3:value=reader.readBool();msg.setPartialFailure(value);break;case 4:value=reader.readBool();msg.setValidateOnly(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.services.MutateConversionActionsRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.services.MutateConversionActionsRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.services.MutateConversionActionsRequest.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getCustomerId()).length&&writer.writeString(1,f),0<(f=message.getOperationsList()).length&&writer.writeRepeatedMessage(2,f,proto.google.ads.googleads.v1.services.ConversionActionOperation.serializeBinaryToWriter),(f=message.getPartialFailure())&&writer.writeBool(3,f),(f=message.getValidateOnly())&&writer.writeBool(4,f)},proto.google.ads.googleads.v1.services.MutateConversionActionsRequest.prototype.getCustomerId=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v1.services.MutateConversionActionsRequest.prototype.setCustomerId=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v1.services.MutateConversionActionsRequest.prototype.getOperationsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v1.services.ConversionActionOperation,2)},proto.google.ads.googleads.v1.services.MutateConversionActionsRequest.prototype.setOperationsList=function(value){jspb.Message.setRepeatedWrapperField(this,2,value)},proto.google.ads.googleads.v1.services.MutateConversionActionsRequest.prototype.addOperations=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,2,opt_value,proto.google.ads.googleads.v1.services.ConversionActionOperation,opt_index)},proto.google.ads.googleads.v1.services.MutateConversionActionsRequest.prototype.clearOperationsList=function(){this.setOperationsList([])},proto.google.ads.googleads.v1.services.MutateConversionActionsRequest.prototype.getPartialFailure=function(){return jspb.Message.getFieldWithDefault(this,3,!1)},proto.google.ads.googleads.v1.services.MutateConversionActionsRequest.prototype.setPartialFailure=function(value){jspb.Message.setProto3BooleanField(this,3,value)},proto.google.ads.googleads.v1.services.MutateConversionActionsRequest.prototype.getValidateOnly=function(){return jspb.Message.getFieldWithDefault(this,4,!1)},proto.google.ads.googleads.v1.services.MutateConversionActionsRequest.prototype.setValidateOnly=function(value){jspb.Message.setProto3BooleanField(this,4,value)},proto.google.ads.googleads.v1.services.ConversionActionOperation=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,proto.google.ads.googleads.v1.services.ConversionActionOperation.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v1.services.ConversionActionOperation,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.services.ConversionActionOperation.displayName="proto.google.ads.googleads.v1.services.ConversionActionOperation"),proto.google.ads.googleads.v1.services.ConversionActionOperation.oneofGroups_=[[1,2,3]],proto.google.ads.googleads.v1.services.ConversionActionOperation.OperationCase={OPERATION_NOT_SET:0,CREATE:1,UPDATE:2,REMOVE:3},proto.google.ads.googleads.v1.services.ConversionActionOperation.prototype.getOperationCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v1.services.ConversionActionOperation.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.services.ConversionActionOperation.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.services.ConversionActionOperation.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.services.ConversionActionOperation.toObject=function(includeInstance,msg){var f,obj={updateMask:(f=msg.getUpdateMask())&&google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance,f),create:(f=msg.getCreate())&&google_ads_googleads_v1_resources_conversion_action_pb.ConversionAction.toObject(includeInstance,f),update:(f=msg.getUpdate())&&google_ads_googleads_v1_resources_conversion_action_pb.ConversionAction.toObject(includeInstance,f),remove:jspb.Message.getFieldWithDefault(msg,3,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.services.ConversionActionOperation.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.services.ConversionActionOperation;return proto.google.ads.googleads.v1.services.ConversionActionOperation.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.services.ConversionActionOperation.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 4:var value=new google_protobuf_field_mask_pb.FieldMask;reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader),msg.setUpdateMask(value);break;case 1:value=new google_ads_googleads_v1_resources_conversion_action_pb.ConversionAction;reader.readMessage(value,google_ads_googleads_v1_resources_conversion_action_pb.ConversionAction.deserializeBinaryFromReader),msg.setCreate(value);break;case 2:value=new google_ads_googleads_v1_resources_conversion_action_pb.ConversionAction;reader.readMessage(value,google_ads_googleads_v1_resources_conversion_action_pb.ConversionAction.deserializeBinaryFromReader),msg.setUpdate(value);break;case 3:value=reader.readString();msg.setRemove(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.services.ConversionActionOperation.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.services.ConversionActionOperation.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.services.ConversionActionOperation.serializeBinaryToWriter=function(message,writer){var f=void 0;null!=(f=message.getUpdateMask())&&writer.writeMessage(4,f,google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter),null!=(f=message.getCreate())&&writer.writeMessage(1,f,google_ads_googleads_v1_resources_conversion_action_pb.ConversionAction.serializeBinaryToWriter),null!=(f=message.getUpdate())&&writer.writeMessage(2,f,google_ads_googleads_v1_resources_conversion_action_pb.ConversionAction.serializeBinaryToWriter),null!=(f=jspb.Message.getField(message,3))&&writer.writeString(3,f)},proto.google.ads.googleads.v1.services.ConversionActionOperation.prototype.getUpdateMask=function(){return jspb.Message.getWrapperField(this,google_protobuf_field_mask_pb.FieldMask,4)},proto.google.ads.googleads.v1.services.ConversionActionOperation.prototype.setUpdateMask=function(value){jspb.Message.setWrapperField(this,4,value)},proto.google.ads.googleads.v1.services.ConversionActionOperation.prototype.clearUpdateMask=function(){this.setUpdateMask(void 0)},proto.google.ads.googleads.v1.services.ConversionActionOperation.prototype.hasUpdateMask=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v1.services.ConversionActionOperation.prototype.getCreate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v1_resources_conversion_action_pb.ConversionAction,1)},proto.google.ads.googleads.v1.services.ConversionActionOperation.prototype.setCreate=function(value){jspb.Message.setOneofWrapperField(this,1,proto.google.ads.googleads.v1.services.ConversionActionOperation.oneofGroups_[0],value)},proto.google.ads.googleads.v1.services.ConversionActionOperation.prototype.clearCreate=function(){this.setCreate(void 0)},proto.google.ads.googleads.v1.services.ConversionActionOperation.prototype.hasCreate=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v1.services.ConversionActionOperation.prototype.getUpdate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v1_resources_conversion_action_pb.ConversionAction,2)},proto.google.ads.googleads.v1.services.ConversionActionOperation.prototype.setUpdate=function(value){jspb.Message.setOneofWrapperField(this,2,proto.google.ads.googleads.v1.services.ConversionActionOperation.oneofGroups_[0],value)},proto.google.ads.googleads.v1.services.ConversionActionOperation.prototype.clearUpdate=function(){this.setUpdate(void 0)},proto.google.ads.googleads.v1.services.ConversionActionOperation.prototype.hasUpdate=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v1.services.ConversionActionOperation.prototype.getRemove=function(){return jspb.Message.getFieldWithDefault(this,3,"")},proto.google.ads.googleads.v1.services.ConversionActionOperation.prototype.setRemove=function(value){jspb.Message.setOneofField(this,3,proto.google.ads.googleads.v1.services.ConversionActionOperation.oneofGroups_[0],value)},proto.google.ads.googleads.v1.services.ConversionActionOperation.prototype.clearRemove=function(){jspb.Message.setOneofField(this,3,proto.google.ads.googleads.v1.services.ConversionActionOperation.oneofGroups_[0],void 0)},proto.google.ads.googleads.v1.services.ConversionActionOperation.prototype.hasRemove=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v1.services.MutateConversionActionsResponse=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v1.services.MutateConversionActionsResponse.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v1.services.MutateConversionActionsResponse,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.services.MutateConversionActionsResponse.displayName="proto.google.ads.googleads.v1.services.MutateConversionActionsResponse"),proto.google.ads.googleads.v1.services.MutateConversionActionsResponse.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.services.MutateConversionActionsResponse.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.services.MutateConversionActionsResponse.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.services.MutateConversionActionsResponse.toObject=function(includeInstance,msg){var f,obj={partialFailureError:(f=msg.getPartialFailureError())&&google_rpc_status_pb.Status.toObject(includeInstance,f),resultsList:jspb.Message.toObjectList(msg.getResultsList(),proto.google.ads.googleads.v1.services.MutateConversionActionResult.toObject,includeInstance)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.services.MutateConversionActionsResponse.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.services.MutateConversionActionsResponse;return proto.google.ads.googleads.v1.services.MutateConversionActionsResponse.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.services.MutateConversionActionsResponse.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 3:var value=new google_rpc_status_pb.Status;reader.readMessage(value,google_rpc_status_pb.Status.deserializeBinaryFromReader),msg.setPartialFailureError(value);break;case 2:value=new proto.google.ads.googleads.v1.services.MutateConversionActionResult;reader.readMessage(value,proto.google.ads.googleads.v1.services.MutateConversionActionResult.deserializeBinaryFromReader),msg.addResults(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.services.MutateConversionActionsResponse.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.services.MutateConversionActionsResponse.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.services.MutateConversionActionsResponse.serializeBinaryToWriter=function(message,writer){var f=void 0;null!=(f=message.getPartialFailureError())&&writer.writeMessage(3,f,google_rpc_status_pb.Status.serializeBinaryToWriter),0<(f=message.getResultsList()).length&&writer.writeRepeatedMessage(2,f,proto.google.ads.googleads.v1.services.MutateConversionActionResult.serializeBinaryToWriter)},proto.google.ads.googleads.v1.services.MutateConversionActionsResponse.prototype.getPartialFailureError=function(){return jspb.Message.getWrapperField(this,google_rpc_status_pb.Status,3)},proto.google.ads.googleads.v1.services.MutateConversionActionsResponse.prototype.setPartialFailureError=function(value){jspb.Message.setWrapperField(this,3,value)},proto.google.ads.googleads.v1.services.MutateConversionActionsResponse.prototype.clearPartialFailureError=function(){this.setPartialFailureError(void 0)},proto.google.ads.googleads.v1.services.MutateConversionActionsResponse.prototype.hasPartialFailureError=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v1.services.MutateConversionActionsResponse.prototype.getResultsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v1.services.MutateConversionActionResult,2)},proto.google.ads.googleads.v1.services.MutateConversionActionsResponse.prototype.setResultsList=function(value){jspb.Message.setRepeatedWrapperField(this,2,value)},proto.google.ads.googleads.v1.services.MutateConversionActionsResponse.prototype.addResults=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,2,opt_value,proto.google.ads.googleads.v1.services.MutateConversionActionResult,opt_index)},proto.google.ads.googleads.v1.services.MutateConversionActionsResponse.prototype.clearResultsList=function(){this.setResultsList([])},proto.google.ads.googleads.v1.services.MutateConversionActionResult=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.services.MutateConversionActionResult,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.services.MutateConversionActionResult.displayName="proto.google.ads.googleads.v1.services.MutateConversionActionResult"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.services.MutateConversionActionResult.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.services.MutateConversionActionResult.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.services.MutateConversionActionResult.toObject=function(includeInstance,msg){var obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.services.MutateConversionActionResult.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.services.MutateConversionActionResult;return proto.google.ads.googleads.v1.services.MutateConversionActionResult.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.services.MutateConversionActionResult.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.services.MutateConversionActionResult.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.services.MutateConversionActionResult.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.services.MutateConversionActionResult.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResourceName()).length&&writer.writeString(1,f)},proto.google.ads.googleads.v1.services.MutateConversionActionResult.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v1.services.MutateConversionActionResult.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},goog.object.extend(exports,proto.google.ads.googleads.v1.services);