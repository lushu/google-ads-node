var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v1_resources_extension_feed_item_pb=require("../../../../../google/ads/googleads/v1/resources/extension_feed_item_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_protobuf_field_mask_pb=require("google-protobuf/google/protobuf/field_mask_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js");goog.exportSymbol("proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.services.GetExtensionFeedItemRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.services.MutateExtensionFeedItemResult",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsResponse",null,global),proto.google.ads.googleads.v1.services.GetExtensionFeedItemRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.services.GetExtensionFeedItemRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.services.GetExtensionFeedItemRequest.displayName="proto.google.ads.googleads.v1.services.GetExtensionFeedItemRequest"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.services.GetExtensionFeedItemRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.services.GetExtensionFeedItemRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.services.GetExtensionFeedItemRequest.toObject=function(includeInstance,msg){var obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.services.GetExtensionFeedItemRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.services.GetExtensionFeedItemRequest;return proto.google.ads.googleads.v1.services.GetExtensionFeedItemRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.services.GetExtensionFeedItemRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.services.GetExtensionFeedItemRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.services.GetExtensionFeedItemRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.services.GetExtensionFeedItemRequest.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResourceName()).length&&writer.writeString(1,f)},proto.google.ads.googleads.v1.services.GetExtensionFeedItemRequest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v1.services.GetExtensionFeedItemRequest.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsRequest.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsRequest.displayName="proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsRequest"),proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsRequest.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsRequest.toObject=function(includeInstance,msg){var obj={customerId:jspb.Message.getFieldWithDefault(msg,1,""),operationsList:jspb.Message.toObjectList(msg.getOperationsList(),proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation.toObject,includeInstance),validateOnly:jspb.Message.getFieldWithDefault(msg,4,!1)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsRequest;return proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setCustomerId(value);break;case 2:value=new proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation;reader.readMessage(value,proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation.deserializeBinaryFromReader),msg.addOperations(value);break;case 4:value=reader.readBool();msg.setValidateOnly(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsRequest.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getCustomerId()).length&&writer.writeString(1,f),0<(f=message.getOperationsList()).length&&writer.writeRepeatedMessage(2,f,proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation.serializeBinaryToWriter),(f=message.getValidateOnly())&&writer.writeBool(4,f)},proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsRequest.prototype.getCustomerId=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsRequest.prototype.setCustomerId=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsRequest.prototype.getOperationsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation,2)},proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsRequest.prototype.setOperationsList=function(value){jspb.Message.setRepeatedWrapperField(this,2,value)},proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsRequest.prototype.addOperations=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,2,opt_value,proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation,opt_index)},proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsRequest.prototype.clearOperationsList=function(){this.setOperationsList([])},proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsRequest.prototype.getValidateOnly=function(){return jspb.Message.getFieldWithDefault(this,4,!1)},proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsRequest.prototype.setValidateOnly=function(value){jspb.Message.setProto3BooleanField(this,4,value)},proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation.displayName="proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation"),proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation.oneofGroups_=[[1,2,3]],proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation.OperationCase={OPERATION_NOT_SET:0,CREATE:1,UPDATE:2,REMOVE:3},proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation.prototype.getOperationCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation.toObject=function(includeInstance,msg){var f,obj={updateMask:(f=msg.getUpdateMask())&&google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance,f),create:(f=msg.getCreate())&&google_ads_googleads_v1_resources_extension_feed_item_pb.ExtensionFeedItem.toObject(includeInstance,f),update:(f=msg.getUpdate())&&google_ads_googleads_v1_resources_extension_feed_item_pb.ExtensionFeedItem.toObject(includeInstance,f),remove:jspb.Message.getFieldWithDefault(msg,3,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation;return proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 4:var value=new google_protobuf_field_mask_pb.FieldMask;reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader),msg.setUpdateMask(value);break;case 1:value=new google_ads_googleads_v1_resources_extension_feed_item_pb.ExtensionFeedItem;reader.readMessage(value,google_ads_googleads_v1_resources_extension_feed_item_pb.ExtensionFeedItem.deserializeBinaryFromReader),msg.setCreate(value);break;case 2:value=new google_ads_googleads_v1_resources_extension_feed_item_pb.ExtensionFeedItem;reader.readMessage(value,google_ads_googleads_v1_resources_extension_feed_item_pb.ExtensionFeedItem.deserializeBinaryFromReader),msg.setUpdate(value);break;case 3:value=reader.readString();msg.setRemove(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation.serializeBinaryToWriter=function(message,writer){var f=void 0;null!=(f=message.getUpdateMask())&&writer.writeMessage(4,f,google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter),null!=(f=message.getCreate())&&writer.writeMessage(1,f,google_ads_googleads_v1_resources_extension_feed_item_pb.ExtensionFeedItem.serializeBinaryToWriter),null!=(f=message.getUpdate())&&writer.writeMessage(2,f,google_ads_googleads_v1_resources_extension_feed_item_pb.ExtensionFeedItem.serializeBinaryToWriter),null!=(f=jspb.Message.getField(message,3))&&writer.writeString(3,f)},proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation.prototype.getUpdateMask=function(){return jspb.Message.getWrapperField(this,google_protobuf_field_mask_pb.FieldMask,4)},proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation.prototype.setUpdateMask=function(value){jspb.Message.setWrapperField(this,4,value)},proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation.prototype.clearUpdateMask=function(){this.setUpdateMask(void 0)},proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation.prototype.hasUpdateMask=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation.prototype.getCreate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v1_resources_extension_feed_item_pb.ExtensionFeedItem,1)},proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation.prototype.setCreate=function(value){jspb.Message.setOneofWrapperField(this,1,proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation.oneofGroups_[0],value)},proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation.prototype.clearCreate=function(){this.setCreate(void 0)},proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation.prototype.hasCreate=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation.prototype.getUpdate=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v1_resources_extension_feed_item_pb.ExtensionFeedItem,2)},proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation.prototype.setUpdate=function(value){jspb.Message.setOneofWrapperField(this,2,proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation.oneofGroups_[0],value)},proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation.prototype.clearUpdate=function(){this.setUpdate(void 0)},proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation.prototype.hasUpdate=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation.prototype.getRemove=function(){return jspb.Message.getFieldWithDefault(this,3,"")},proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation.prototype.setRemove=function(value){jspb.Message.setOneofField(this,3,proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation.oneofGroups_[0],value)},proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation.prototype.clearRemove=function(){jspb.Message.setOneofField(this,3,proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation.oneofGroups_[0],void 0)},proto.google.ads.googleads.v1.services.ExtensionFeedItemOperation.prototype.hasRemove=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsResponse=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsResponse.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsResponse,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsResponse.displayName="proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsResponse"),proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsResponse.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsResponse.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsResponse.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsResponse.toObject=function(includeInstance,msg){var obj={resultsList:jspb.Message.toObjectList(msg.getResultsList(),proto.google.ads.googleads.v1.services.MutateExtensionFeedItemResult.toObject,includeInstance)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsResponse.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsResponse;return proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsResponse.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsResponse.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 2:var value=new proto.google.ads.googleads.v1.services.MutateExtensionFeedItemResult;reader.readMessage(value,proto.google.ads.googleads.v1.services.MutateExtensionFeedItemResult.deserializeBinaryFromReader),msg.addResults(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsResponse.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsResponse.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsResponse.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResultsList()).length&&writer.writeRepeatedMessage(2,f,proto.google.ads.googleads.v1.services.MutateExtensionFeedItemResult.serializeBinaryToWriter)},proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsResponse.prototype.getResultsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v1.services.MutateExtensionFeedItemResult,2)},proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsResponse.prototype.setResultsList=function(value){jspb.Message.setRepeatedWrapperField(this,2,value)},proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsResponse.prototype.addResults=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,2,opt_value,proto.google.ads.googleads.v1.services.MutateExtensionFeedItemResult,opt_index)},proto.google.ads.googleads.v1.services.MutateExtensionFeedItemsResponse.prototype.clearResultsList=function(){this.setResultsList([])},proto.google.ads.googleads.v1.services.MutateExtensionFeedItemResult=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.services.MutateExtensionFeedItemResult,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.services.MutateExtensionFeedItemResult.displayName="proto.google.ads.googleads.v1.services.MutateExtensionFeedItemResult"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.services.MutateExtensionFeedItemResult.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.services.MutateExtensionFeedItemResult.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.services.MutateExtensionFeedItemResult.toObject=function(includeInstance,msg){var obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.services.MutateExtensionFeedItemResult.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.services.MutateExtensionFeedItemResult;return proto.google.ads.googleads.v1.services.MutateExtensionFeedItemResult.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.services.MutateExtensionFeedItemResult.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.services.MutateExtensionFeedItemResult.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.services.MutateExtensionFeedItemResult.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.services.MutateExtensionFeedItemResult.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResourceName()).length&&writer.writeString(1,f)},proto.google.ads.googleads.v1.services.MutateExtensionFeedItemResult.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v1.services.MutateExtensionFeedItemResult.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},goog.object.extend(exports,proto.google.ads.googleads.v1.services);