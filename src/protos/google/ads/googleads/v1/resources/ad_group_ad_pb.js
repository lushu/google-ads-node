var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v1_common_policy_pb=require("../../../../../google/ads/googleads/v1/common/policy_pb.js"),google_ads_googleads_v1_enums_ad_group_ad_status_pb=require("../../../../../google/ads/googleads/v1/enums/ad_group_ad_status_pb.js"),google_ads_googleads_v1_enums_ad_strength_pb=require("../../../../../google/ads/googleads/v1/enums/ad_strength_pb.js"),google_ads_googleads_v1_enums_policy_approval_status_pb=require("../../../../../google/ads/googleads/v1/enums/policy_approval_status_pb.js"),google_ads_googleads_v1_enums_policy_review_status_pb=require("../../../../../google/ads/googleads/v1/enums/policy_review_status_pb.js"),google_ads_googleads_v1_resources_ad_pb=require("../../../../../google/ads/googleads/v1/resources/ad_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v1.resources.AdGroupAd",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.resources.AdGroupAdPolicySummary",null,global),proto.google.ads.googleads.v1.resources.AdGroupAd=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.resources.AdGroupAd,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.resources.AdGroupAd.displayName="proto.google.ads.googleads.v1.resources.AdGroupAd"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.resources.AdGroupAd.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.resources.AdGroupAd.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.resources.AdGroupAd.toObject=function(includeInstance,msg){var f,obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,""),status:jspb.Message.getFieldWithDefault(msg,3,0),adGroup:(f=msg.getAdGroup())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),ad:(f=msg.getAd())&&google_ads_googleads_v1_resources_ad_pb.Ad.toObject(includeInstance,f),policySummary:(f=msg.getPolicySummary())&&proto.google.ads.googleads.v1.resources.AdGroupAdPolicySummary.toObject(includeInstance,f),adStrength:jspb.Message.getFieldWithDefault(msg,7,0)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.resources.AdGroupAd.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.resources.AdGroupAd;return proto.google.ads.googleads.v1.resources.AdGroupAd.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.resources.AdGroupAd.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;case 3:value=reader.readEnum();msg.setStatus(value);break;case 4:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setAdGroup(value);break;case 5:value=new google_ads_googleads_v1_resources_ad_pb.Ad;reader.readMessage(value,google_ads_googleads_v1_resources_ad_pb.Ad.deserializeBinaryFromReader),msg.setAd(value);break;case 6:value=new proto.google.ads.googleads.v1.resources.AdGroupAdPolicySummary;reader.readMessage(value,proto.google.ads.googleads.v1.resources.AdGroupAdPolicySummary.deserializeBinaryFromReader),msg.setPolicySummary(value);break;case 7:value=reader.readEnum();msg.setAdStrength(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.resources.AdGroupAd.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.resources.AdGroupAd.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.resources.AdGroupAd.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getResourceName()).length&&writer.writeString(1,f),0!==(f=message.getStatus())&&writer.writeEnum(3,f),null!=(f=message.getAdGroup())&&writer.writeMessage(4,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getAd())&&writer.writeMessage(5,f,google_ads_googleads_v1_resources_ad_pb.Ad.serializeBinaryToWriter),null!=(f=message.getPolicySummary())&&writer.writeMessage(6,f,proto.google.ads.googleads.v1.resources.AdGroupAdPolicySummary.serializeBinaryToWriter),0!==(f=message.getAdStrength())&&writer.writeEnum(7,f)},proto.google.ads.googleads.v1.resources.AdGroupAd.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v1.resources.AdGroupAd.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v1.resources.AdGroupAd.prototype.getStatus=function(){return jspb.Message.getFieldWithDefault(this,3,0)},proto.google.ads.googleads.v1.resources.AdGroupAd.prototype.setStatus=function(value){jspb.Message.setProto3EnumField(this,3,value)},proto.google.ads.googleads.v1.resources.AdGroupAd.prototype.getAdGroup=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,4)},proto.google.ads.googleads.v1.resources.AdGroupAd.prototype.setAdGroup=function(value){jspb.Message.setWrapperField(this,4,value)},proto.google.ads.googleads.v1.resources.AdGroupAd.prototype.clearAdGroup=function(){this.setAdGroup(void 0)},proto.google.ads.googleads.v1.resources.AdGroupAd.prototype.hasAdGroup=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v1.resources.AdGroupAd.prototype.getAd=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v1_resources_ad_pb.Ad,5)},proto.google.ads.googleads.v1.resources.AdGroupAd.prototype.setAd=function(value){jspb.Message.setWrapperField(this,5,value)},proto.google.ads.googleads.v1.resources.AdGroupAd.prototype.clearAd=function(){this.setAd(void 0)},proto.google.ads.googleads.v1.resources.AdGroupAd.prototype.hasAd=function(){return null!=jspb.Message.getField(this,5)},proto.google.ads.googleads.v1.resources.AdGroupAd.prototype.getPolicySummary=function(){return jspb.Message.getWrapperField(this,proto.google.ads.googleads.v1.resources.AdGroupAdPolicySummary,6)},proto.google.ads.googleads.v1.resources.AdGroupAd.prototype.setPolicySummary=function(value){jspb.Message.setWrapperField(this,6,value)},proto.google.ads.googleads.v1.resources.AdGroupAd.prototype.clearPolicySummary=function(){this.setPolicySummary(void 0)},proto.google.ads.googleads.v1.resources.AdGroupAd.prototype.hasPolicySummary=function(){return null!=jspb.Message.getField(this,6)},proto.google.ads.googleads.v1.resources.AdGroupAd.prototype.getAdStrength=function(){return jspb.Message.getFieldWithDefault(this,7,0)},proto.google.ads.googleads.v1.resources.AdGroupAd.prototype.setAdStrength=function(value){jspb.Message.setProto3EnumField(this,7,value)},proto.google.ads.googleads.v1.resources.AdGroupAdPolicySummary=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v1.resources.AdGroupAdPolicySummary.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v1.resources.AdGroupAdPolicySummary,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.resources.AdGroupAdPolicySummary.displayName="proto.google.ads.googleads.v1.resources.AdGroupAdPolicySummary"),proto.google.ads.googleads.v1.resources.AdGroupAdPolicySummary.repeatedFields_=[1],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.resources.AdGroupAdPolicySummary.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.resources.AdGroupAdPolicySummary.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.resources.AdGroupAdPolicySummary.toObject=function(includeInstance,msg){var obj={policyTopicEntriesList:jspb.Message.toObjectList(msg.getPolicyTopicEntriesList(),google_ads_googleads_v1_common_policy_pb.PolicyTopicEntry.toObject,includeInstance),reviewStatus:jspb.Message.getFieldWithDefault(msg,2,0),approvalStatus:jspb.Message.getFieldWithDefault(msg,3,0)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.resources.AdGroupAdPolicySummary.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.resources.AdGroupAdPolicySummary;return proto.google.ads.googleads.v1.resources.AdGroupAdPolicySummary.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.resources.AdGroupAdPolicySummary.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=new google_ads_googleads_v1_common_policy_pb.PolicyTopicEntry;reader.readMessage(value,google_ads_googleads_v1_common_policy_pb.PolicyTopicEntry.deserializeBinaryFromReader),msg.addPolicyTopicEntries(value);break;case 2:value=reader.readEnum();msg.setReviewStatus(value);break;case 3:value=reader.readEnum();msg.setApprovalStatus(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.resources.AdGroupAdPolicySummary.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.resources.AdGroupAdPolicySummary.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.resources.AdGroupAdPolicySummary.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getPolicyTopicEntriesList()).length&&writer.writeRepeatedMessage(1,f,google_ads_googleads_v1_common_policy_pb.PolicyTopicEntry.serializeBinaryToWriter),0!==(f=message.getReviewStatus())&&writer.writeEnum(2,f),0!==(f=message.getApprovalStatus())&&writer.writeEnum(3,f)},proto.google.ads.googleads.v1.resources.AdGroupAdPolicySummary.prototype.getPolicyTopicEntriesList=function(){return jspb.Message.getRepeatedWrapperField(this,google_ads_googleads_v1_common_policy_pb.PolicyTopicEntry,1)},proto.google.ads.googleads.v1.resources.AdGroupAdPolicySummary.prototype.setPolicyTopicEntriesList=function(value){jspb.Message.setRepeatedWrapperField(this,1,value)},proto.google.ads.googleads.v1.resources.AdGroupAdPolicySummary.prototype.addPolicyTopicEntries=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,1,opt_value,proto.google.ads.googleads.v1.common.PolicyTopicEntry,opt_index)},proto.google.ads.googleads.v1.resources.AdGroupAdPolicySummary.prototype.clearPolicyTopicEntriesList=function(){this.setPolicyTopicEntriesList([])},proto.google.ads.googleads.v1.resources.AdGroupAdPolicySummary.prototype.getReviewStatus=function(){return jspb.Message.getFieldWithDefault(this,2,0)},proto.google.ads.googleads.v1.resources.AdGroupAdPolicySummary.prototype.setReviewStatus=function(value){jspb.Message.setProto3EnumField(this,2,value)},proto.google.ads.googleads.v1.resources.AdGroupAdPolicySummary.prototype.getApprovalStatus=function(){return jspb.Message.getFieldWithDefault(this,3,0)},proto.google.ads.googleads.v1.resources.AdGroupAdPolicySummary.prototype.setApprovalStatus=function(value){jspb.Message.setProto3EnumField(this,3,value)},goog.object.extend(exports,proto.google.ads.googleads.v1.resources);