var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v1_resources_customer_feed_pb=require("../../../../../google/ads/googleads/v1/resources/customer_feed_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_protobuf_field_mask_pb=require("google-protobuf/google/protobuf/field_mask_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_rpc_status_pb=require("../../../../../google/rpc/status_pb.js");goog.exportSymbol("proto.google.ads.googleads.v1.services.CustomerFeedOperation",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.services.GetCustomerFeedRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.services.MutateCustomerFeedResult",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.services.MutateCustomerFeedsRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.services.MutateCustomerFeedsResponse",null,global),proto.google.ads.googleads.v1.services.GetCustomerFeedRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.services.GetCustomerFeedRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.services.GetCustomerFeedRequest.displayName="proto.google.ads.googleads.v1.services.GetCustomerFeedRequest"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.services.GetCustomerFeedRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.services.GetCustomerFeedRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.services.GetCustomerFeedRequest.toObject=function(includeInstance,msg){var obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.services.GetCustomerFeedRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.services.GetCustomerFeedRequest;return proto.google.ads.googleads.v1.services.GetCustomerFeedRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.services.GetCustomerFeedRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.services.GetCustomerFeedRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.services.GetCustomerFeedRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.services.GetCustomerFeedRequest.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResourceName()).length&&writer.writeString(1,f)},proto.google.ads.googleads.v1.services.GetCustomerFeedRequest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v1.services.GetCustomerFeedRequest.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v1.services.MutateCustomerFeedsRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v1.services.MutateCustomerFeedsRequest.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v1.services.MutateCustomerFeedsRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.services.MutateCustomerFeedsRequest.displayName="proto.google.ads.googleads.v1.services.MutateCustomerFeedsRequest"),proto.google.ads.googleads.v1.services.MutateCustomerFeedsRequest.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.services.MutateCustomerFeedsRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.services.MutateCustomerFeedsRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.services.MutateCustomerFeedsRequest.toObject=function(includeInstance,msg){var obj={customerId:jspb.Message.getFieldWithDefault(msg,1,""),operationsList:jspb.Message.toObjectList(msg.getOperationsList(),proto.google.ads.googleads.v1.services.CustomerFeedOperation.toObject,includeInstance),partialFailure:jspb.Message.getFieldWithDefault(msg,3,!1),validateOnly:jspb.Message.getFieldWithDefault(msg,4,!1)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.services.MutateCustomerFeedsRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.services.MutateCustomerFeedsRequest;return proto.google.ads.googleads.v1.services.MutateCustomerFeedsRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.services.MutateCustomerFeedsRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setCustomerId(value);break;case 2:value=new proto.google.ads.googleads.v1.services.CustomerFeedOperation;reader.readMessage(value,proto.google.ads.googleads.v1.services.CustomerFeedOperation.deserializeBinaryFromReader),msg.addOperations(value);break;case 3:value=reader.readBool();msg.setPartialFailure(value);break;case 4:value=reader.readBool();msg.setValidateOnly(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.services.MutateCustomerFeedsRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.services.MutateCustomerFeedsRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.services.MutateCustomerFeedsRequest.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getCustomerId()).length&&writer.writeString(1,f),0<(f=message.getOperationsList()).length&&writer.writeRepeatedMessage(2,f,proto.google.ads.googleads.v1.services.CustomerFeedOperation.serializeBinaryToWriter),(f=message.getPartialFailure())&&writer.writeBool(3,f),(f=message.getValidateOnly())&&writer.writeBool(4,f)},proto.google.ads.googleads.v1.services.MutateCustomerFeedsRequest.prototype.getCustomerId=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v1.services.MutateCustomerFeedsRequest.prototype.setCustomerId=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v1.services.MutateCustomerFeedsRequest.prototype.getOperationsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v1.services.CustomerFeedOperation,2)},proto.google.ads.googleads.v1.services.MutateCustomerFeedsRequest.prototype.setOperationsList=function(value){jspb.Message.setRepeatedWrapperField(this,2,value)},proto.google.ads.googleads.v1.services.MutateCustomerFeedsRequest.prototype.addOperations=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,2,opt_value,proto.google.ads.googleads.v1.services.CustomerFeedOperation,opt_index)},proto.google.ads.googleads.v1.services.MutateCustomerFeedsRequest.prototype.clearOperationsList=function(){this.setOperationsList([])},proto.google.ads.googleads.v1.services.MutateCustomerFeedsRequest.prototype.getPartialFailure=function(){return jspb.Message.getFieldWithDefault(this,3,!1)},proto.google.ads.googleads.v1.services.MutateCustomerFeedsRequest.prototype.setPartialFailure=function(value){jspb.Message.setProto3BooleanField(this,3,value)},proto.google.ads.googleads.v1.services.MutateCustomerFeedsRequest.prototype.getValidateOnly=function(){return jspb.Message.getFieldWithDefault(this,4,!1)},proto.google.ads.googleads.v1.services.MutateCustomerFeedsRequest.prototype.setValidateOnly=function(value){jspb.Message.setProto3BooleanField(this,4,value)},proto.google.ads.googleads.v1.services.CustomerFeedOperation=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,proto.google.ads.googleads.v1.services.CustomerFeedOperation.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v1.services.CustomerFeedOperation,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.services.CustomerFeedOperation.displayName="proto.google.ads.googleads.v1.services.CustomerFeedOperation"),proto.google.ads.googleads.v1.services.CustomerFeedOperation.oneofGroups_=[[1,2,3]],proto.google.ads.googleads.v1.services.CustomerFeedOperation.OperationCase={OPERATION_NOT_SET:0,CREATE:1,UPDATE:2,REMOVE:3},proto.google.ads.googleads.v1.services.CustomerFeedOperation.prototype.getOperationCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v1.services.CustomerFeedOperation.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.services.CustomerFeedOperation.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.services.CustomerFeedOperation.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.services.CustomerFeedOperation.toObject=function(includeInstance,msg){var f,obj={updateMask:(f=msg.getUpdateMask())&&google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance,f),create:(f=msg.getCreate())&&google_ads_googleads_v1_resources_customer_feed_pb.CustomerFeed.toObject(includeInstance,f),update:(f=msg.getUpdate())&&google_ads_googleads_v1_resources_customer_feed_pb.CustomerFeed.toObject(includeInstance,f),remove:jspb.Message.getFieldWithDefault(msg,3,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.services.CustomerFeedOperation.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.services.CustomerFeedOperation;return proto.google.ads.googleads.v1.services.CustomerFeedOperation.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.services.CustomerFeedOperation.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 4:var value=new google_protobuf_field_mask_pb.FieldMask;reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader),msg.setUpdateMask(value);break;case 1:value=new google_ads_googleads_v1_resources_customer_feed_pb.CustomerFeed;reader.readMessage(value,google_ads_googleads_v1_resources_customer_feed_pb.CustomerFeed.deserializeBinaryFromReader),msg.setCreate(value);break;case 2:value=new google_ads_googleads_v1_resources_customer_feed_pb.CustomerFeed;reader.readMessage(value,google_ads_googleads_v1_resources_customer_feed_pb.CustomerFeed.deserializeBinaryFromReader),msg.setUpdate(value);break;case 3:value=reader.readString();msg.setRemove(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.services.CustomerFeedOperation.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.services.CustomerFeedOperation.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.services.CustomerFeedOperation.serializeBinaryToWriter=function(message,writer){var f=void 0;null!=(f=message.getUpdateMask())&&writer.writeMessage(4,f,google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter),null!=(f=message.getCreate())&&writer.writeMessage(1,f,google_ads_googleads_v1_resources_customer_feed_pb.CustomerFeed.serializeBinaryToWriter),null!=(f=message.getUpdate())&&writer.writeMessage(2,f,google_ads_googleads_v1_resources_customer_feed_pb.CustomerFeed.serializeBinaryToWriter),null!=(f=jspb.Message.getField(message,3))&&writer.writeString(3,f)},proto.google.ads.googleads.v1.services.CustomerFeedOperation.prototype.getUpdateMask=function(){return jspb.Message.getWrapperField(this,google_protobuf_field_mask_pb.FieldMask,4)},proto.google.ads.googleads.v1.services.CustomerFeedOperation.prototype.setUpdateMask=function(value){jspb.Message.setWrapperField(this,4,value)},proto.google.ads.googleads.v1.services.CustomerFeedOperation.prototype.clearUpdateMask=function(){this.setUpdateMask(void 0)},proto.google.ads.googleads.v1.services.CustomerFeedOperation.prototype.hasUpdateMask=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v1.services.CustomerFeedOperation.prototype.getCreate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v1_resources_customer_feed_pb.CustomerFeed,1)},proto.google.ads.googleads.v1.services.CustomerFeedOperation.prototype.setCreate=function(value){jspb.Message.setOneofWrapperField(this,1,proto.google.ads.googleads.v1.services.CustomerFeedOperation.oneofGroups_[0],value)},proto.google.ads.googleads.v1.services.CustomerFeedOperation.prototype.clearCreate=function(){this.setCreate(void 0)},proto.google.ads.googleads.v1.services.CustomerFeedOperation.prototype.hasCreate=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v1.services.CustomerFeedOperation.prototype.getUpdate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v1_resources_customer_feed_pb.CustomerFeed,2)},proto.google.ads.googleads.v1.services.CustomerFeedOperation.prototype.setUpdate=function(value){jspb.Message.setOneofWrapperField(this,2,proto.google.ads.googleads.v1.services.CustomerFeedOperation.oneofGroups_[0],value)},proto.google.ads.googleads.v1.services.CustomerFeedOperation.prototype.clearUpdate=function(){this.setUpdate(void 0)},proto.google.ads.googleads.v1.services.CustomerFeedOperation.prototype.hasUpdate=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v1.services.CustomerFeedOperation.prototype.getRemove=function(){return jspb.Message.getFieldWithDefault(this,3,"")},proto.google.ads.googleads.v1.services.CustomerFeedOperation.prototype.setRemove=function(value){jspb.Message.setOneofField(this,3,proto.google.ads.googleads.v1.services.CustomerFeedOperation.oneofGroups_[0],value)},proto.google.ads.googleads.v1.services.CustomerFeedOperation.prototype.clearRemove=function(){jspb.Message.setOneofField(this,3,proto.google.ads.googleads.v1.services.CustomerFeedOperation.oneofGroups_[0],void 0)},proto.google.ads.googleads.v1.services.CustomerFeedOperation.prototype.hasRemove=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v1.services.MutateCustomerFeedsResponse=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v1.services.MutateCustomerFeedsResponse.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v1.services.MutateCustomerFeedsResponse,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.services.MutateCustomerFeedsResponse.displayName="proto.google.ads.googleads.v1.services.MutateCustomerFeedsResponse"),proto.google.ads.googleads.v1.services.MutateCustomerFeedsResponse.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.services.MutateCustomerFeedsResponse.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.services.MutateCustomerFeedsResponse.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.services.MutateCustomerFeedsResponse.toObject=function(includeInstance,msg){var f,obj={partialFailureError:(f=msg.getPartialFailureError())&&google_rpc_status_pb.Status.toObject(includeInstance,f),resultsList:jspb.Message.toObjectList(msg.getResultsList(),proto.google.ads.googleads.v1.services.MutateCustomerFeedResult.toObject,includeInstance)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.services.MutateCustomerFeedsResponse.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.services.MutateCustomerFeedsResponse;return proto.google.ads.googleads.v1.services.MutateCustomerFeedsResponse.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.services.MutateCustomerFeedsResponse.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 3:var value=new google_rpc_status_pb.Status;reader.readMessage(value,google_rpc_status_pb.Status.deserializeBinaryFromReader),msg.setPartialFailureError(value);break;case 2:value=new proto.google.ads.googleads.v1.services.MutateCustomerFeedResult;reader.readMessage(value,proto.google.ads.googleads.v1.services.MutateCustomerFeedResult.deserializeBinaryFromReader),msg.addResults(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.services.MutateCustomerFeedsResponse.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.services.MutateCustomerFeedsResponse.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.services.MutateCustomerFeedsResponse.serializeBinaryToWriter=function(message,writer){var f=void 0;null!=(f=message.getPartialFailureError())&&writer.writeMessage(3,f,google_rpc_status_pb.Status.serializeBinaryToWriter),0<(f=message.getResultsList()).length&&writer.writeRepeatedMessage(2,f,proto.google.ads.googleads.v1.services.MutateCustomerFeedResult.serializeBinaryToWriter)},proto.google.ads.googleads.v1.services.MutateCustomerFeedsResponse.prototype.getPartialFailureError=function(){return jspb.Message.getWrapperField(this,google_rpc_status_pb.Status,3)},proto.google.ads.googleads.v1.services.MutateCustomerFeedsResponse.prototype.setPartialFailureError=function(value){jspb.Message.setWrapperField(this,3,value)},proto.google.ads.googleads.v1.services.MutateCustomerFeedsResponse.prototype.clearPartialFailureError=function(){this.setPartialFailureError(void 0)},proto.google.ads.googleads.v1.services.MutateCustomerFeedsResponse.prototype.hasPartialFailureError=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v1.services.MutateCustomerFeedsResponse.prototype.getResultsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v1.services.MutateCustomerFeedResult,2)},proto.google.ads.googleads.v1.services.MutateCustomerFeedsResponse.prototype.setResultsList=function(value){jspb.Message.setRepeatedWrapperField(this,2,value)},proto.google.ads.googleads.v1.services.MutateCustomerFeedsResponse.prototype.addResults=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,2,opt_value,proto.google.ads.googleads.v1.services.MutateCustomerFeedResult,opt_index)},proto.google.ads.googleads.v1.services.MutateCustomerFeedsResponse.prototype.clearResultsList=function(){this.setResultsList([])},proto.google.ads.googleads.v1.services.MutateCustomerFeedResult=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.services.MutateCustomerFeedResult,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.services.MutateCustomerFeedResult.displayName="proto.google.ads.googleads.v1.services.MutateCustomerFeedResult"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.services.MutateCustomerFeedResult.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.services.MutateCustomerFeedResult.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.services.MutateCustomerFeedResult.toObject=function(includeInstance,msg){var obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.services.MutateCustomerFeedResult.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.services.MutateCustomerFeedResult;return proto.google.ads.googleads.v1.services.MutateCustomerFeedResult.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.services.MutateCustomerFeedResult.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.services.MutateCustomerFeedResult.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.services.MutateCustomerFeedResult.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.services.MutateCustomerFeedResult.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResourceName()).length&&writer.writeString(1,f)},proto.google.ads.googleads.v1.services.MutateCustomerFeedResult.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v1.services.MutateCustomerFeedResult.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},goog.object.extend(exports,proto.google.ads.googleads.v1.services);