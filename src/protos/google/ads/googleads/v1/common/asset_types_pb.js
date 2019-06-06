var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v1_enums_mime_type_pb=require("../../../../../google/ads/googleads/v1/enums/mime_type_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v1.common.ImageAsset",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.common.ImageDimension",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.common.MediaBundleAsset",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.common.TextAsset",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.common.YoutubeVideoAsset",null,global),proto.google.ads.googleads.v1.common.YoutubeVideoAsset=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.common.YoutubeVideoAsset,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.common.YoutubeVideoAsset.displayName="proto.google.ads.googleads.v1.common.YoutubeVideoAsset"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.common.YoutubeVideoAsset.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.common.YoutubeVideoAsset.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.common.YoutubeVideoAsset.toObject=function(includeInstance,msg){var f,obj={youtubeVideoId:(f=msg.getYoutubeVideoId())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.common.YoutubeVideoAsset.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.common.YoutubeVideoAsset;return proto.google.ads.googleads.v1.common.YoutubeVideoAsset.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.common.YoutubeVideoAsset.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setYoutubeVideoId(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v1.common.YoutubeVideoAsset.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.common.YoutubeVideoAsset.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.common.YoutubeVideoAsset.serializeBinaryToWriter=function(message,writer){var f;null!=(f=message.getYoutubeVideoId())&&writer.writeMessage(1,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter)},proto.google.ads.googleads.v1.common.YoutubeVideoAsset.prototype.getYoutubeVideoId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,1)},proto.google.ads.googleads.v1.common.YoutubeVideoAsset.prototype.setYoutubeVideoId=function(value){jspb.Message.setWrapperField(this,1,value)},proto.google.ads.googleads.v1.common.YoutubeVideoAsset.prototype.clearYoutubeVideoId=function(){this.setYoutubeVideoId(void 0)},proto.google.ads.googleads.v1.common.YoutubeVideoAsset.prototype.hasYoutubeVideoId=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v1.common.MediaBundleAsset=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.common.MediaBundleAsset,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.common.MediaBundleAsset.displayName="proto.google.ads.googleads.v1.common.MediaBundleAsset"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.common.MediaBundleAsset.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.common.MediaBundleAsset.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.common.MediaBundleAsset.toObject=function(includeInstance,msg){var f,obj={data:(f=msg.getData())&&google_protobuf_wrappers_pb.BytesValue.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.common.MediaBundleAsset.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.common.MediaBundleAsset;return proto.google.ads.googleads.v1.common.MediaBundleAsset.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.common.MediaBundleAsset.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=new google_protobuf_wrappers_pb.BytesValue;reader.readMessage(value,google_protobuf_wrappers_pb.BytesValue.deserializeBinaryFromReader),msg.setData(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v1.common.MediaBundleAsset.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.common.MediaBundleAsset.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.common.MediaBundleAsset.serializeBinaryToWriter=function(message,writer){var f;null!=(f=message.getData())&&writer.writeMessage(1,f,google_protobuf_wrappers_pb.BytesValue.serializeBinaryToWriter)},proto.google.ads.googleads.v1.common.MediaBundleAsset.prototype.getData=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.BytesValue,1)},proto.google.ads.googleads.v1.common.MediaBundleAsset.prototype.setData=function(value){jspb.Message.setWrapperField(this,1,value)},proto.google.ads.googleads.v1.common.MediaBundleAsset.prototype.clearData=function(){this.setData(void 0)},proto.google.ads.googleads.v1.common.MediaBundleAsset.prototype.hasData=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v1.common.ImageAsset=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.common.ImageAsset,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.common.ImageAsset.displayName="proto.google.ads.googleads.v1.common.ImageAsset"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.common.ImageAsset.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.common.ImageAsset.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.common.ImageAsset.toObject=function(includeInstance,msg){var f,obj={data:(f=msg.getData())&&google_protobuf_wrappers_pb.BytesValue.toObject(includeInstance,f),fileSize:(f=msg.getFileSize())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),mimeType:jspb.Message.getFieldWithDefault(msg,3,0),fullSize:(f=msg.getFullSize())&&proto.google.ads.googleads.v1.common.ImageDimension.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.common.ImageAsset.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.common.ImageAsset;return proto.google.ads.googleads.v1.common.ImageAsset.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.common.ImageAsset.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=new google_protobuf_wrappers_pb.BytesValue;reader.readMessage(value,google_protobuf_wrappers_pb.BytesValue.deserializeBinaryFromReader),msg.setData(value);break;case 2:value=new google_protobuf_wrappers_pb.Int64Value,reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setFileSize(value);break;case 3:value=reader.readEnum(),msg.setMimeType(value);break;case 4:value=new proto.google.ads.googleads.v1.common.ImageDimension,reader.readMessage(value,proto.google.ads.googleads.v1.common.ImageDimension.deserializeBinaryFromReader),msg.setFullSize(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v1.common.ImageAsset.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.common.ImageAsset.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.common.ImageAsset.serializeBinaryToWriter=function(message,writer){var f=void 0;null!=(f=message.getData())&&writer.writeMessage(1,f,google_protobuf_wrappers_pb.BytesValue.serializeBinaryToWriter),null!=(f=message.getFileSize())&&writer.writeMessage(2,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),0!==(f=message.getMimeType())&&writer.writeEnum(3,f),null!=(f=message.getFullSize())&&writer.writeMessage(4,f,proto.google.ads.googleads.v1.common.ImageDimension.serializeBinaryToWriter)},proto.google.ads.googleads.v1.common.ImageAsset.prototype.getData=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.BytesValue,1)},proto.google.ads.googleads.v1.common.ImageAsset.prototype.setData=function(value){jspb.Message.setWrapperField(this,1,value)},proto.google.ads.googleads.v1.common.ImageAsset.prototype.clearData=function(){this.setData(void 0)},proto.google.ads.googleads.v1.common.ImageAsset.prototype.hasData=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v1.common.ImageAsset.prototype.getFileSize=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,2)},proto.google.ads.googleads.v1.common.ImageAsset.prototype.setFileSize=function(value){jspb.Message.setWrapperField(this,2,value)},proto.google.ads.googleads.v1.common.ImageAsset.prototype.clearFileSize=function(){this.setFileSize(void 0)},proto.google.ads.googleads.v1.common.ImageAsset.prototype.hasFileSize=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v1.common.ImageAsset.prototype.getMimeType=function(){return jspb.Message.getFieldWithDefault(this,3,0)},proto.google.ads.googleads.v1.common.ImageAsset.prototype.setMimeType=function(value){jspb.Message.setProto3EnumField(this,3,value)},proto.google.ads.googleads.v1.common.ImageAsset.prototype.getFullSize=function(){return jspb.Message.getWrapperField(this,proto.google.ads.googleads.v1.common.ImageDimension,4)},proto.google.ads.googleads.v1.common.ImageAsset.prototype.setFullSize=function(value){jspb.Message.setWrapperField(this,4,value)},proto.google.ads.googleads.v1.common.ImageAsset.prototype.clearFullSize=function(){this.setFullSize(void 0)},proto.google.ads.googleads.v1.common.ImageAsset.prototype.hasFullSize=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v1.common.ImageDimension=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.common.ImageDimension,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.common.ImageDimension.displayName="proto.google.ads.googleads.v1.common.ImageDimension"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.common.ImageDimension.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.common.ImageDimension.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.common.ImageDimension.toObject=function(includeInstance,msg){var f,obj={heightPixels:(f=msg.getHeightPixels())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),widthPixels:(f=msg.getWidthPixels())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),url:(f=msg.getUrl())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.common.ImageDimension.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.common.ImageDimension;return proto.google.ads.googleads.v1.common.ImageDimension.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.common.ImageDimension.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=new google_protobuf_wrappers_pb.Int64Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setHeightPixels(value);break;case 2:value=new google_protobuf_wrappers_pb.Int64Value,reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setWidthPixels(value);break;case 3:value=new google_protobuf_wrappers_pb.StringValue,reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setUrl(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v1.common.ImageDimension.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.common.ImageDimension.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.common.ImageDimension.serializeBinaryToWriter=function(message,writer){var f=void 0;null!=(f=message.getHeightPixels())&&writer.writeMessage(1,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(f=message.getWidthPixels())&&writer.writeMessage(2,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(f=message.getUrl())&&writer.writeMessage(3,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter)},proto.google.ads.googleads.v1.common.ImageDimension.prototype.getHeightPixels=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,1)},proto.google.ads.googleads.v1.common.ImageDimension.prototype.setHeightPixels=function(value){jspb.Message.setWrapperField(this,1,value)},proto.google.ads.googleads.v1.common.ImageDimension.prototype.clearHeightPixels=function(){this.setHeightPixels(void 0)},proto.google.ads.googleads.v1.common.ImageDimension.prototype.hasHeightPixels=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v1.common.ImageDimension.prototype.getWidthPixels=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,2)},proto.google.ads.googleads.v1.common.ImageDimension.prototype.setWidthPixels=function(value){jspb.Message.setWrapperField(this,2,value)},proto.google.ads.googleads.v1.common.ImageDimension.prototype.clearWidthPixels=function(){this.setWidthPixels(void 0)},proto.google.ads.googleads.v1.common.ImageDimension.prototype.hasWidthPixels=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v1.common.ImageDimension.prototype.getUrl=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,3)},proto.google.ads.googleads.v1.common.ImageDimension.prototype.setUrl=function(value){jspb.Message.setWrapperField(this,3,value)},proto.google.ads.googleads.v1.common.ImageDimension.prototype.clearUrl=function(){this.setUrl(void 0)},proto.google.ads.googleads.v1.common.ImageDimension.prototype.hasUrl=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v1.common.TextAsset=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.common.TextAsset,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.common.TextAsset.displayName="proto.google.ads.googleads.v1.common.TextAsset"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.common.TextAsset.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.common.TextAsset.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.common.TextAsset.toObject=function(includeInstance,msg){var f,obj={text:(f=msg.getText())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.common.TextAsset.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.common.TextAsset;return proto.google.ads.googleads.v1.common.TextAsset.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.common.TextAsset.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setText(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v1.common.TextAsset.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.common.TextAsset.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.common.TextAsset.serializeBinaryToWriter=function(message,writer){var f;null!=(f=message.getText())&&writer.writeMessage(1,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter)},proto.google.ads.googleads.v1.common.TextAsset.prototype.getText=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,1)},proto.google.ads.googleads.v1.common.TextAsset.prototype.setText=function(value){jspb.Message.setWrapperField(this,1,value)},proto.google.ads.googleads.v1.common.TextAsset.prototype.clearText=function(){this.setText(void 0)},proto.google.ads.googleads.v1.common.TextAsset.prototype.hasText=function(){return null!=jspb.Message.getField(this,1)},goog.object.extend(exports,proto.google.ads.googleads.v1.common);