var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js");goog.object.extend(proto,google_protobuf_wrappers_pb);var google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.common.TextLabel",null,global),proto.google.ads.googleads.v4.common.TextLabel=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.common.TextLabel,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.common.TextLabel.displayName="proto.google.ads.googleads.v4.common.TextLabel"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.common.TextLabel.prototype.toObject=function(o){return proto.google.ads.googleads.v4.common.TextLabel.toObject(o,this)},proto.google.ads.googleads.v4.common.TextLabel.toObject=function(o,e){var r,t={backgroundColor:(r=e.getBackgroundColor())&&google_protobuf_wrappers_pb.StringValue.toObject(o,r),description:(r=e.getDescription())&&google_protobuf_wrappers_pb.StringValue.toObject(o,r)};return o&&(t.$jspbMessageInstance=e),t}),proto.google.ads.googleads.v4.common.TextLabel.deserializeBinary=function(o){var e=new jspb.BinaryReader(o),r=new proto.google.ads.googleads.v4.common.TextLabel;return proto.google.ads.googleads.v4.common.TextLabel.deserializeBinaryFromReader(r,e)},proto.google.ads.googleads.v4.common.TextLabel.deserializeBinaryFromReader=function(o,e){for(;e.nextField()&&!e.isEndGroup();){switch(e.getFieldNumber()){case 1:var r=new google_protobuf_wrappers_pb.StringValue;e.readMessage(r,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),o.setBackgroundColor(r);break;case 2:r=new google_protobuf_wrappers_pb.StringValue;e.readMessage(r,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),o.setDescription(r);break;default:e.skipField()}}return o},proto.google.ads.googleads.v4.common.TextLabel.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.common.TextLabel.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.common.TextLabel.serializeBinaryToWriter=function(o,e){var r=void 0;null!=(r=o.getBackgroundColor())&&e.writeMessage(1,r,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(r=o.getDescription())&&e.writeMessage(2,r,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter)},proto.google.ads.googleads.v4.common.TextLabel.prototype.getBackgroundColor=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,1)},proto.google.ads.googleads.v4.common.TextLabel.prototype.setBackgroundColor=function(o){return jspb.Message.setWrapperField(this,1,o)},proto.google.ads.googleads.v4.common.TextLabel.prototype.clearBackgroundColor=function(){return this.setBackgroundColor(void 0)},proto.google.ads.googleads.v4.common.TextLabel.prototype.hasBackgroundColor=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v4.common.TextLabel.prototype.getDescription=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,2)},proto.google.ads.googleads.v4.common.TextLabel.prototype.setDescription=function(o){return jspb.Message.setWrapperField(this,2,o)},proto.google.ads.googleads.v4.common.TextLabel.prototype.clearDescription=function(){return this.setDescription(void 0)},proto.google.ads.googleads.v4.common.TextLabel.prototype.hasDescription=function(){return null!=jspb.Message.getField(this,2)},goog.object.extend(exports,proto.google.ads.googleads.v4.common);