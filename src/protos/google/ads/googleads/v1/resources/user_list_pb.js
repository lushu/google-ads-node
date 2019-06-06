var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v1_common_user_lists_pb=require("../../../../../google/ads/googleads/v1/common/user_lists_pb.js"),google_ads_googleads_v1_enums_access_reason_pb=require("../../../../../google/ads/googleads/v1/enums/access_reason_pb.js"),google_ads_googleads_v1_enums_user_list_access_status_pb=require("../../../../../google/ads/googleads/v1/enums/user_list_access_status_pb.js"),google_ads_googleads_v1_enums_user_list_closing_reason_pb=require("../../../../../google/ads/googleads/v1/enums/user_list_closing_reason_pb.js"),google_ads_googleads_v1_enums_user_list_membership_status_pb=require("../../../../../google/ads/googleads/v1/enums/user_list_membership_status_pb.js"),google_ads_googleads_v1_enums_user_list_size_range_pb=require("../../../../../google/ads/googleads/v1/enums/user_list_size_range_pb.js"),google_ads_googleads_v1_enums_user_list_type_pb=require("../../../../../google/ads/googleads/v1/enums/user_list_type_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v1.resources.UserList",null,global),proto.google.ads.googleads.v1.resources.UserList=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,proto.google.ads.googleads.v1.resources.UserList.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v1.resources.UserList,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.resources.UserList.displayName="proto.google.ads.googleads.v1.resources.UserList"),proto.google.ads.googleads.v1.resources.UserList.oneofGroups_=[[19,20,21,22,23]],proto.google.ads.googleads.v1.resources.UserList.UserListCase={USER_LIST_NOT_SET:0,CRM_BASED_USER_LIST:19,SIMILAR_USER_LIST:20,RULE_BASED_USER_LIST:21,LOGICAL_USER_LIST:22,BASIC_USER_LIST:23},proto.google.ads.googleads.v1.resources.UserList.prototype.getUserListCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v1.resources.UserList.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.resources.UserList.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.resources.UserList.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.resources.UserList.toObject=function(includeInstance,msg){var f,obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,""),id:(f=msg.getId())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),readOnly:(f=msg.getReadOnly())&&google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance,f),name:(f=msg.getName())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),description:(f=msg.getDescription())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),membershipStatus:jspb.Message.getFieldWithDefault(msg,6,0),integrationCode:(f=msg.getIntegrationCode())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),membershipLifeSpan:(f=msg.getMembershipLifeSpan())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),sizeForDisplay:(f=msg.getSizeForDisplay())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),sizeRangeForDisplay:jspb.Message.getFieldWithDefault(msg,10,0),sizeForSearch:(f=msg.getSizeForSearch())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),sizeRangeForSearch:jspb.Message.getFieldWithDefault(msg,12,0),type:jspb.Message.getFieldWithDefault(msg,13,0),closingReason:jspb.Message.getFieldWithDefault(msg,14,0),accessReason:jspb.Message.getFieldWithDefault(msg,15,0),accountUserListStatus:jspb.Message.getFieldWithDefault(msg,16,0),eligibleForSearch:(f=msg.getEligibleForSearch())&&google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance,f),eligibleForDisplay:(f=msg.getEligibleForDisplay())&&google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance,f),crmBasedUserList:(f=msg.getCrmBasedUserList())&&google_ads_googleads_v1_common_user_lists_pb.CrmBasedUserListInfo.toObject(includeInstance,f),similarUserList:(f=msg.getSimilarUserList())&&google_ads_googleads_v1_common_user_lists_pb.SimilarUserListInfo.toObject(includeInstance,f),ruleBasedUserList:(f=msg.getRuleBasedUserList())&&google_ads_googleads_v1_common_user_lists_pb.RuleBasedUserListInfo.toObject(includeInstance,f),logicalUserList:(f=msg.getLogicalUserList())&&google_ads_googleads_v1_common_user_lists_pb.LogicalUserListInfo.toObject(includeInstance,f),basicUserList:(f=msg.getBasicUserList())&&google_ads_googleads_v1_common_user_lists_pb.BasicUserListInfo.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.resources.UserList.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.resources.UserList;return proto.google.ads.googleads.v1.resources.UserList.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.resources.UserList.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;case 2:value=new google_protobuf_wrappers_pb.Int64Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setId(value);break;case 3:value=new google_protobuf_wrappers_pb.BoolValue;reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader),msg.setReadOnly(value);break;case 4:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setName(value);break;case 5:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setDescription(value);break;case 6:value=reader.readEnum();msg.setMembershipStatus(value);break;case 7:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setIntegrationCode(value);break;case 8:value=new google_protobuf_wrappers_pb.Int64Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setMembershipLifeSpan(value);break;case 9:value=new google_protobuf_wrappers_pb.Int64Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setSizeForDisplay(value);break;case 10:value=reader.readEnum();msg.setSizeRangeForDisplay(value);break;case 11:value=new google_protobuf_wrappers_pb.Int64Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setSizeForSearch(value);break;case 12:value=reader.readEnum();msg.setSizeRangeForSearch(value);break;case 13:value=reader.readEnum();msg.setType(value);break;case 14:value=reader.readEnum();msg.setClosingReason(value);break;case 15:value=reader.readEnum();msg.setAccessReason(value);break;case 16:value=reader.readEnum();msg.setAccountUserListStatus(value);break;case 17:value=new google_protobuf_wrappers_pb.BoolValue;reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader),msg.setEligibleForSearch(value);break;case 18:value=new google_protobuf_wrappers_pb.BoolValue;reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader),msg.setEligibleForDisplay(value);break;case 19:value=new google_ads_googleads_v1_common_user_lists_pb.CrmBasedUserListInfo;reader.readMessage(value,google_ads_googleads_v1_common_user_lists_pb.CrmBasedUserListInfo.deserializeBinaryFromReader),msg.setCrmBasedUserList(value);break;case 20:value=new google_ads_googleads_v1_common_user_lists_pb.SimilarUserListInfo;reader.readMessage(value,google_ads_googleads_v1_common_user_lists_pb.SimilarUserListInfo.deserializeBinaryFromReader),msg.setSimilarUserList(value);break;case 21:value=new google_ads_googleads_v1_common_user_lists_pb.RuleBasedUserListInfo;reader.readMessage(value,google_ads_googleads_v1_common_user_lists_pb.RuleBasedUserListInfo.deserializeBinaryFromReader),msg.setRuleBasedUserList(value);break;case 22:value=new google_ads_googleads_v1_common_user_lists_pb.LogicalUserListInfo;reader.readMessage(value,google_ads_googleads_v1_common_user_lists_pb.LogicalUserListInfo.deserializeBinaryFromReader),msg.setLogicalUserList(value);break;case 23:value=new google_ads_googleads_v1_common_user_lists_pb.BasicUserListInfo;reader.readMessage(value,google_ads_googleads_v1_common_user_lists_pb.BasicUserListInfo.deserializeBinaryFromReader),msg.setBasicUserList(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.resources.UserList.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.resources.UserList.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.resources.UserList.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getResourceName()).length&&writer.writeString(1,f),null!=(f=message.getId())&&writer.writeMessage(2,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(f=message.getReadOnly())&&writer.writeMessage(3,f,google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter),null!=(f=message.getName())&&writer.writeMessage(4,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getDescription())&&writer.writeMessage(5,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),0!==(f=message.getMembershipStatus())&&writer.writeEnum(6,f),null!=(f=message.getIntegrationCode())&&writer.writeMessage(7,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getMembershipLifeSpan())&&writer.writeMessage(8,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(f=message.getSizeForDisplay())&&writer.writeMessage(9,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),0!==(f=message.getSizeRangeForDisplay())&&writer.writeEnum(10,f),null!=(f=message.getSizeForSearch())&&writer.writeMessage(11,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),0!==(f=message.getSizeRangeForSearch())&&writer.writeEnum(12,f),0!==(f=message.getType())&&writer.writeEnum(13,f),0!==(f=message.getClosingReason())&&writer.writeEnum(14,f),0!==(f=message.getAccessReason())&&writer.writeEnum(15,f),0!==(f=message.getAccountUserListStatus())&&writer.writeEnum(16,f),null!=(f=message.getEligibleForSearch())&&writer.writeMessage(17,f,google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter),null!=(f=message.getEligibleForDisplay())&&writer.writeMessage(18,f,google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter),null!=(f=message.getCrmBasedUserList())&&writer.writeMessage(19,f,google_ads_googleads_v1_common_user_lists_pb.CrmBasedUserListInfo.serializeBinaryToWriter),null!=(f=message.getSimilarUserList())&&writer.writeMessage(20,f,google_ads_googleads_v1_common_user_lists_pb.SimilarUserListInfo.serializeBinaryToWriter),null!=(f=message.getRuleBasedUserList())&&writer.writeMessage(21,f,google_ads_googleads_v1_common_user_lists_pb.RuleBasedUserListInfo.serializeBinaryToWriter),null!=(f=message.getLogicalUserList())&&writer.writeMessage(22,f,google_ads_googleads_v1_common_user_lists_pb.LogicalUserListInfo.serializeBinaryToWriter),null!=(f=message.getBasicUserList())&&writer.writeMessage(23,f,google_ads_googleads_v1_common_user_lists_pb.BasicUserListInfo.serializeBinaryToWriter)},proto.google.ads.googleads.v1.resources.UserList.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v1.resources.UserList.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v1.resources.UserList.prototype.getId=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,2)},proto.google.ads.googleads.v1.resources.UserList.prototype.setId=function(value){jspb.Message.setWrapperField(this,2,value)},proto.google.ads.googleads.v1.resources.UserList.prototype.clearId=function(){this.setId(void 0)},proto.google.ads.googleads.v1.resources.UserList.prototype.hasId=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v1.resources.UserList.prototype.getReadOnly=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.BoolValue,3)},proto.google.ads.googleads.v1.resources.UserList.prototype.setReadOnly=function(value){jspb.Message.setWrapperField(this,3,value)},proto.google.ads.googleads.v1.resources.UserList.prototype.clearReadOnly=function(){this.setReadOnly(void 0)},proto.google.ads.googleads.v1.resources.UserList.prototype.hasReadOnly=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v1.resources.UserList.prototype.getName=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,4)},proto.google.ads.googleads.v1.resources.UserList.prototype.setName=function(value){jspb.Message.setWrapperField(this,4,value)},proto.google.ads.googleads.v1.resources.UserList.prototype.clearName=function(){this.setName(void 0)},proto.google.ads.googleads.v1.resources.UserList.prototype.hasName=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v1.resources.UserList.prototype.getDescription=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,5)},proto.google.ads.googleads.v1.resources.UserList.prototype.setDescription=function(value){jspb.Message.setWrapperField(this,5,value)},proto.google.ads.googleads.v1.resources.UserList.prototype.clearDescription=function(){this.setDescription(void 0)},proto.google.ads.googleads.v1.resources.UserList.prototype.hasDescription=function(){return null!=jspb.Message.getField(this,5)},proto.google.ads.googleads.v1.resources.UserList.prototype.getMembershipStatus=function(){return jspb.Message.getFieldWithDefault(this,6,0)},proto.google.ads.googleads.v1.resources.UserList.prototype.setMembershipStatus=function(value){jspb.Message.setProto3EnumField(this,6,value)},proto.google.ads.googleads.v1.resources.UserList.prototype.getIntegrationCode=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,7)},proto.google.ads.googleads.v1.resources.UserList.prototype.setIntegrationCode=function(value){jspb.Message.setWrapperField(this,7,value)},proto.google.ads.googleads.v1.resources.UserList.prototype.clearIntegrationCode=function(){this.setIntegrationCode(void 0)},proto.google.ads.googleads.v1.resources.UserList.prototype.hasIntegrationCode=function(){return null!=jspb.Message.getField(this,7)},proto.google.ads.googleads.v1.resources.UserList.prototype.getMembershipLifeSpan=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,8)},proto.google.ads.googleads.v1.resources.UserList.prototype.setMembershipLifeSpan=function(value){jspb.Message.setWrapperField(this,8,value)},proto.google.ads.googleads.v1.resources.UserList.prototype.clearMembershipLifeSpan=function(){this.setMembershipLifeSpan(void 0)},proto.google.ads.googleads.v1.resources.UserList.prototype.hasMembershipLifeSpan=function(){return null!=jspb.Message.getField(this,8)},proto.google.ads.googleads.v1.resources.UserList.prototype.getSizeForDisplay=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,9)},proto.google.ads.googleads.v1.resources.UserList.prototype.setSizeForDisplay=function(value){jspb.Message.setWrapperField(this,9,value)},proto.google.ads.googleads.v1.resources.UserList.prototype.clearSizeForDisplay=function(){this.setSizeForDisplay(void 0)},proto.google.ads.googleads.v1.resources.UserList.prototype.hasSizeForDisplay=function(){return null!=jspb.Message.getField(this,9)},proto.google.ads.googleads.v1.resources.UserList.prototype.getSizeRangeForDisplay=function(){return jspb.Message.getFieldWithDefault(this,10,0)},proto.google.ads.googleads.v1.resources.UserList.prototype.setSizeRangeForDisplay=function(value){jspb.Message.setProto3EnumField(this,10,value)},proto.google.ads.googleads.v1.resources.UserList.prototype.getSizeForSearch=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,11)},proto.google.ads.googleads.v1.resources.UserList.prototype.setSizeForSearch=function(value){jspb.Message.setWrapperField(this,11,value)},proto.google.ads.googleads.v1.resources.UserList.prototype.clearSizeForSearch=function(){this.setSizeForSearch(void 0)},proto.google.ads.googleads.v1.resources.UserList.prototype.hasSizeForSearch=function(){return null!=jspb.Message.getField(this,11)},proto.google.ads.googleads.v1.resources.UserList.prototype.getSizeRangeForSearch=function(){return jspb.Message.getFieldWithDefault(this,12,0)},proto.google.ads.googleads.v1.resources.UserList.prototype.setSizeRangeForSearch=function(value){jspb.Message.setProto3EnumField(this,12,value)},proto.google.ads.googleads.v1.resources.UserList.prototype.getType=function(){return jspb.Message.getFieldWithDefault(this,13,0)},proto.google.ads.googleads.v1.resources.UserList.prototype.setType=function(value){jspb.Message.setProto3EnumField(this,13,value)},proto.google.ads.googleads.v1.resources.UserList.prototype.getClosingReason=function(){return jspb.Message.getFieldWithDefault(this,14,0)},proto.google.ads.googleads.v1.resources.UserList.prototype.setClosingReason=function(value){jspb.Message.setProto3EnumField(this,14,value)},proto.google.ads.googleads.v1.resources.UserList.prototype.getAccessReason=function(){return jspb.Message.getFieldWithDefault(this,15,0)},proto.google.ads.googleads.v1.resources.UserList.prototype.setAccessReason=function(value){jspb.Message.setProto3EnumField(this,15,value)},proto.google.ads.googleads.v1.resources.UserList.prototype.getAccountUserListStatus=function(){return jspb.Message.getFieldWithDefault(this,16,0)},proto.google.ads.googleads.v1.resources.UserList.prototype.setAccountUserListStatus=function(value){jspb.Message.setProto3EnumField(this,16,value)},proto.google.ads.googleads.v1.resources.UserList.prototype.getEligibleForSearch=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.BoolValue,17)},proto.google.ads.googleads.v1.resources.UserList.prototype.setEligibleForSearch=function(value){jspb.Message.setWrapperField(this,17,value)},proto.google.ads.googleads.v1.resources.UserList.prototype.clearEligibleForSearch=function(){this.setEligibleForSearch(void 0)},proto.google.ads.googleads.v1.resources.UserList.prototype.hasEligibleForSearch=function(){return null!=jspb.Message.getField(this,17)},proto.google.ads.googleads.v1.resources.UserList.prototype.getEligibleForDisplay=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.BoolValue,18)},proto.google.ads.googleads.v1.resources.UserList.prototype.setEligibleForDisplay=function(value){jspb.Message.setWrapperField(this,18,value)},proto.google.ads.googleads.v1.resources.UserList.prototype.clearEligibleForDisplay=function(){this.setEligibleForDisplay(void 0)},proto.google.ads.googleads.v1.resources.UserList.prototype.hasEligibleForDisplay=function(){return null!=jspb.Message.getField(this,18)},proto.google.ads.googleads.v1.resources.UserList.prototype.getCrmBasedUserList=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v1_common_user_lists_pb.CrmBasedUserListInfo,19)},proto.google.ads.googleads.v1.resources.UserList.prototype.setCrmBasedUserList=function(value){jspb.Message.setOneofWrapperField(this,19,proto.google.ads.googleads.v1.resources.UserList.oneofGroups_[0],value)},proto.google.ads.googleads.v1.resources.UserList.prototype.clearCrmBasedUserList=function(){this.setCrmBasedUserList(void 0)},proto.google.ads.googleads.v1.resources.UserList.prototype.hasCrmBasedUserList=function(){return null!=jspb.Message.getField(this,19)},proto.google.ads.googleads.v1.resources.UserList.prototype.getSimilarUserList=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v1_common_user_lists_pb.SimilarUserListInfo,20)},proto.google.ads.googleads.v1.resources.UserList.prototype.setSimilarUserList=function(value){jspb.Message.setOneofWrapperField(this,20,proto.google.ads.googleads.v1.resources.UserList.oneofGroups_[0],value)},proto.google.ads.googleads.v1.resources.UserList.prototype.clearSimilarUserList=function(){this.setSimilarUserList(void 0)},proto.google.ads.googleads.v1.resources.UserList.prototype.hasSimilarUserList=function(){return null!=jspb.Message.getField(this,20)},proto.google.ads.googleads.v1.resources.UserList.prototype.getRuleBasedUserList=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v1_common_user_lists_pb.RuleBasedUserListInfo,21)},proto.google.ads.googleads.v1.resources.UserList.prototype.setRuleBasedUserList=function(value){jspb.Message.setOneofWrapperField(this,21,proto.google.ads.googleads.v1.resources.UserList.oneofGroups_[0],value)},proto.google.ads.googleads.v1.resources.UserList.prototype.clearRuleBasedUserList=function(){this.setRuleBasedUserList(void 0)},proto.google.ads.googleads.v1.resources.UserList.prototype.hasRuleBasedUserList=function(){return null!=jspb.Message.getField(this,21)},proto.google.ads.googleads.v1.resources.UserList.prototype.getLogicalUserList=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v1_common_user_lists_pb.LogicalUserListInfo,22)},proto.google.ads.googleads.v1.resources.UserList.prototype.setLogicalUserList=function(value){jspb.Message.setOneofWrapperField(this,22,proto.google.ads.googleads.v1.resources.UserList.oneofGroups_[0],value)},proto.google.ads.googleads.v1.resources.UserList.prototype.clearLogicalUserList=function(){this.setLogicalUserList(void 0)},proto.google.ads.googleads.v1.resources.UserList.prototype.hasLogicalUserList=function(){return null!=jspb.Message.getField(this,22)},proto.google.ads.googleads.v1.resources.UserList.prototype.getBasicUserList=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v1_common_user_lists_pb.BasicUserListInfo,23)},proto.google.ads.googleads.v1.resources.UserList.prototype.setBasicUserList=function(value){jspb.Message.setOneofWrapperField(this,23,proto.google.ads.googleads.v1.resources.UserList.oneofGroups_[0],value)},proto.google.ads.googleads.v1.resources.UserList.prototype.clearBasicUserList=function(){this.setBasicUserList(void 0)},proto.google.ads.googleads.v1.resources.UserList.prototype.hasBasicUserList=function(){return null!=jspb.Message.getField(this,23)},goog.object.extend(exports,proto.google.ads.googleads.v1.resources);