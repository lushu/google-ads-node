var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v1_enums_keyword_plan_network_pb=require("../../../../../google/ads/googleads/v1/enums/keyword_plan_network_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v1.resources.KeywordPlanCampaign",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.resources.KeywordPlanGeoTarget",null,global),proto.google.ads.googleads.v1.resources.KeywordPlanCampaign=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v1.resources.KeywordPlanCampaign.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v1.resources.KeywordPlanCampaign,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.resources.KeywordPlanCampaign.displayName="proto.google.ads.googleads.v1.resources.KeywordPlanCampaign"),proto.google.ads.googleads.v1.resources.KeywordPlanCampaign.repeatedFields_=[5,8],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.resources.KeywordPlanCampaign.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.resources.KeywordPlanCampaign.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.resources.KeywordPlanCampaign.toObject=function(includeInstance,msg){var f,obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,""),keywordPlan:(f=msg.getKeywordPlan())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),id:(f=msg.getId())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),name:(f=msg.getName())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),languageConstantsList:jspb.Message.toObjectList(msg.getLanguageConstantsList(),google_protobuf_wrappers_pb.StringValue.toObject,includeInstance),keywordPlanNetwork:jspb.Message.getFieldWithDefault(msg,6,0),cpcBidMicros:(f=msg.getCpcBidMicros())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),geoTargetsList:jspb.Message.toObjectList(msg.getGeoTargetsList(),proto.google.ads.googleads.v1.resources.KeywordPlanGeoTarget.toObject,includeInstance)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.resources.KeywordPlanCampaign.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.resources.KeywordPlanCampaign;return proto.google.ads.googleads.v1.resources.KeywordPlanCampaign.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.resources.KeywordPlanCampaign.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;case 2:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setKeywordPlan(value);break;case 3:value=new google_protobuf_wrappers_pb.Int64Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setId(value);break;case 4:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setName(value);break;case 5:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.addLanguageConstants(value);break;case 6:value=reader.readEnum();msg.setKeywordPlanNetwork(value);break;case 7:value=new google_protobuf_wrappers_pb.Int64Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setCpcBidMicros(value);break;case 8:value=new proto.google.ads.googleads.v1.resources.KeywordPlanGeoTarget;reader.readMessage(value,proto.google.ads.googleads.v1.resources.KeywordPlanGeoTarget.deserializeBinaryFromReader),msg.addGeoTargets(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.resources.KeywordPlanCampaign.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.resources.KeywordPlanCampaign.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.resources.KeywordPlanCampaign.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getResourceName()).length&&writer.writeString(1,f),null!=(f=message.getKeywordPlan())&&writer.writeMessage(2,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getId())&&writer.writeMessage(3,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(f=message.getName())&&writer.writeMessage(4,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),0<(f=message.getLanguageConstantsList()).length&&writer.writeRepeatedMessage(5,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),0!==(f=message.getKeywordPlanNetwork())&&writer.writeEnum(6,f),null!=(f=message.getCpcBidMicros())&&writer.writeMessage(7,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),0<(f=message.getGeoTargetsList()).length&&writer.writeRepeatedMessage(8,f,proto.google.ads.googleads.v1.resources.KeywordPlanGeoTarget.serializeBinaryToWriter)},proto.google.ads.googleads.v1.resources.KeywordPlanCampaign.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v1.resources.KeywordPlanCampaign.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v1.resources.KeywordPlanCampaign.prototype.getKeywordPlan=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,2)},proto.google.ads.googleads.v1.resources.KeywordPlanCampaign.prototype.setKeywordPlan=function(value){jspb.Message.setWrapperField(this,2,value)},proto.google.ads.googleads.v1.resources.KeywordPlanCampaign.prototype.clearKeywordPlan=function(){this.setKeywordPlan(void 0)},proto.google.ads.googleads.v1.resources.KeywordPlanCampaign.prototype.hasKeywordPlan=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v1.resources.KeywordPlanCampaign.prototype.getId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,3)},proto.google.ads.googleads.v1.resources.KeywordPlanCampaign.prototype.setId=function(value){jspb.Message.setWrapperField(this,3,value)},proto.google.ads.googleads.v1.resources.KeywordPlanCampaign.prototype.clearId=function(){this.setId(void 0)},proto.google.ads.googleads.v1.resources.KeywordPlanCampaign.prototype.hasId=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v1.resources.KeywordPlanCampaign.prototype.getName=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,4)},proto.google.ads.googleads.v1.resources.KeywordPlanCampaign.prototype.setName=function(value){jspb.Message.setWrapperField(this,4,value)},proto.google.ads.googleads.v1.resources.KeywordPlanCampaign.prototype.clearName=function(){this.setName(void 0)},proto.google.ads.googleads.v1.resources.KeywordPlanCampaign.prototype.hasName=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v1.resources.KeywordPlanCampaign.prototype.getLanguageConstantsList=function(){return jspb.Message.getRepeatedWrapperField(this,google_protobuf_wrappers_pb.StringValue,5)},proto.google.ads.googleads.v1.resources.KeywordPlanCampaign.prototype.setLanguageConstantsList=function(value){jspb.Message.setRepeatedWrapperField(this,5,value)},proto.google.ads.googleads.v1.resources.KeywordPlanCampaign.prototype.addLanguageConstants=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,5,opt_value,proto.google.protobuf.StringValue,opt_index)},proto.google.ads.googleads.v1.resources.KeywordPlanCampaign.prototype.clearLanguageConstantsList=function(){this.setLanguageConstantsList([])},proto.google.ads.googleads.v1.resources.KeywordPlanCampaign.prototype.getKeywordPlanNetwork=function(){return jspb.Message.getFieldWithDefault(this,6,0)},proto.google.ads.googleads.v1.resources.KeywordPlanCampaign.prototype.setKeywordPlanNetwork=function(value){jspb.Message.setProto3EnumField(this,6,value)},proto.google.ads.googleads.v1.resources.KeywordPlanCampaign.prototype.getCpcBidMicros=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,7)},proto.google.ads.googleads.v1.resources.KeywordPlanCampaign.prototype.setCpcBidMicros=function(value){jspb.Message.setWrapperField(this,7,value)},proto.google.ads.googleads.v1.resources.KeywordPlanCampaign.prototype.clearCpcBidMicros=function(){this.setCpcBidMicros(void 0)},proto.google.ads.googleads.v1.resources.KeywordPlanCampaign.prototype.hasCpcBidMicros=function(){return null!=jspb.Message.getField(this,7)},proto.google.ads.googleads.v1.resources.KeywordPlanCampaign.prototype.getGeoTargetsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v1.resources.KeywordPlanGeoTarget,8)},proto.google.ads.googleads.v1.resources.KeywordPlanCampaign.prototype.setGeoTargetsList=function(value){jspb.Message.setRepeatedWrapperField(this,8,value)},proto.google.ads.googleads.v1.resources.KeywordPlanCampaign.prototype.addGeoTargets=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,8,opt_value,proto.google.ads.googleads.v1.resources.KeywordPlanGeoTarget,opt_index)},proto.google.ads.googleads.v1.resources.KeywordPlanCampaign.prototype.clearGeoTargetsList=function(){this.setGeoTargetsList([])},proto.google.ads.googleads.v1.resources.KeywordPlanGeoTarget=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.resources.KeywordPlanGeoTarget,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.resources.KeywordPlanGeoTarget.displayName="proto.google.ads.googleads.v1.resources.KeywordPlanGeoTarget"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.resources.KeywordPlanGeoTarget.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.resources.KeywordPlanGeoTarget.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.resources.KeywordPlanGeoTarget.toObject=function(includeInstance,msg){var f,obj={geoTargetConstant:(f=msg.getGeoTargetConstant())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.resources.KeywordPlanGeoTarget.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.resources.KeywordPlanGeoTarget;return proto.google.ads.googleads.v1.resources.KeywordPlanGeoTarget.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.resources.KeywordPlanGeoTarget.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setGeoTargetConstant(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.resources.KeywordPlanGeoTarget.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.resources.KeywordPlanGeoTarget.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.resources.KeywordPlanGeoTarget.serializeBinaryToWriter=function(message,writer){var f;null!=(f=message.getGeoTargetConstant())&&writer.writeMessage(1,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter)},proto.google.ads.googleads.v1.resources.KeywordPlanGeoTarget.prototype.getGeoTargetConstant=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,1)},proto.google.ads.googleads.v1.resources.KeywordPlanGeoTarget.prototype.setGeoTargetConstant=function(value){jspb.Message.setWrapperField(this,1,value)},proto.google.ads.googleads.v1.resources.KeywordPlanGeoTarget.prototype.clearGeoTargetConstant=function(){this.setGeoTargetConstant(void 0)},proto.google.ads.googleads.v1.resources.KeywordPlanGeoTarget.prototype.hasGeoTargetConstant=function(){return null!=jspb.Message.getField(this,1)},goog.object.extend(exports,proto.google.ads.googleads.v1.resources);