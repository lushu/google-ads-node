var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");goog.object.extend(proto,google_api_field_behavior_pb);var google_api_resource_pb=require("../../../../../google/api/resource_pb.js");goog.object.extend(proto,google_api_resource_pb);var google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js");goog.object.extend(proto,google_protobuf_wrappers_pb);var google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.object.extend(proto,google_api_annotations_pb),goog.exportSymbol("proto.google.ads.googleads.v4.resources.MobileAppCategoryConstant",null,global),proto.google.ads.googleads.v4.resources.MobileAppCategoryConstant=function(o){jspb.Message.initialize(this,o,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v4.resources.MobileAppCategoryConstant,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v4.resources.MobileAppCategoryConstant.displayName="proto.google.ads.googleads.v4.resources.MobileAppCategoryConstant"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v4.resources.MobileAppCategoryConstant.prototype.toObject=function(o){return proto.google.ads.googleads.v4.resources.MobileAppCategoryConstant.toObject(o,this)},proto.google.ads.googleads.v4.resources.MobileAppCategoryConstant.toObject=function(o,e){var r,t={resourceName:jspb.Message.getFieldWithDefault(e,1,""),id:(r=e.getId())&&google_protobuf_wrappers_pb.Int32Value.toObject(o,r),name:(r=e.getName())&&google_protobuf_wrappers_pb.StringValue.toObject(o,r)};return o&&(t.$jspbMessageInstance=e),t}),proto.google.ads.googleads.v4.resources.MobileAppCategoryConstant.deserializeBinary=function(o){var e=new jspb.BinaryReader(o),r=new proto.google.ads.googleads.v4.resources.MobileAppCategoryConstant;return proto.google.ads.googleads.v4.resources.MobileAppCategoryConstant.deserializeBinaryFromReader(r,e)},proto.google.ads.googleads.v4.resources.MobileAppCategoryConstant.deserializeBinaryFromReader=function(o,e){for(;e.nextField()&&!e.isEndGroup();){switch(e.getFieldNumber()){case 1:var r=e.readString();o.setResourceName(r);break;case 2:r=new google_protobuf_wrappers_pb.Int32Value;e.readMessage(r,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader),o.setId(r);break;case 3:r=new google_protobuf_wrappers_pb.StringValue;e.readMessage(r,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),o.setName(r);break;default:e.skipField()}}return o},proto.google.ads.googleads.v4.resources.MobileAppCategoryConstant.prototype.serializeBinary=function(){var o=new jspb.BinaryWriter;return proto.google.ads.googleads.v4.resources.MobileAppCategoryConstant.serializeBinaryToWriter(this,o),o.getResultBuffer()},proto.google.ads.googleads.v4.resources.MobileAppCategoryConstant.serializeBinaryToWriter=function(o,e){var r=void 0;0<(r=o.getResourceName()).length&&e.writeString(1,r),null!=(r=o.getId())&&e.writeMessage(2,r,google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter),null!=(r=o.getName())&&e.writeMessage(3,r,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter)},proto.google.ads.googleads.v4.resources.MobileAppCategoryConstant.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v4.resources.MobileAppCategoryConstant.prototype.setResourceName=function(o){return jspb.Message.setProto3StringField(this,1,o)},proto.google.ads.googleads.v4.resources.MobileAppCategoryConstant.prototype.getId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int32Value,2)},proto.google.ads.googleads.v4.resources.MobileAppCategoryConstant.prototype.setId=function(o){return jspb.Message.setWrapperField(this,2,o)},proto.google.ads.googleads.v4.resources.MobileAppCategoryConstant.prototype.clearId=function(){return this.setId(void 0)},proto.google.ads.googleads.v4.resources.MobileAppCategoryConstant.prototype.hasId=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v4.resources.MobileAppCategoryConstant.prototype.getName=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,3)},proto.google.ads.googleads.v4.resources.MobileAppCategoryConstant.prototype.setName=function(o){return jspb.Message.setWrapperField(this,3,o)},proto.google.ads.googleads.v4.resources.MobileAppCategoryConstant.prototype.clearName=function(){return this.setName(void 0)},proto.google.ads.googleads.v4.resources.MobileAppCategoryConstant.prototype.hasName=function(){return null!=jspb.Message.getField(this,3)},goog.object.extend(exports,proto.google.ads.googleads.v4.resources);