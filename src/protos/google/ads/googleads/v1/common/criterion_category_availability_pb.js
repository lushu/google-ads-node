var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v1_enums_advertising_channel_sub_type_pb=require("../../../../../google/ads/googleads/v1/enums/advertising_channel_sub_type_pb.js"),google_ads_googleads_v1_enums_advertising_channel_type_pb=require("../../../../../google/ads/googleads/v1/enums/advertising_channel_type_pb.js"),google_ads_googleads_v1_enums_criterion_category_channel_availability_mode_pb=require("../../../../../google/ads/googleads/v1/enums/criterion_category_channel_availability_mode_pb.js"),google_ads_googleads_v1_enums_criterion_category_locale_availability_mode_pb=require("../../../../../google/ads/googleads/v1/enums/criterion_category_locale_availability_mode_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v1.common.CriterionCategoryAvailability",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.common.CriterionCategoryChannelAvailability",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.common.CriterionCategoryLocaleAvailability",null,global),proto.google.ads.googleads.v1.common.CriterionCategoryAvailability=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v1.common.CriterionCategoryAvailability.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v1.common.CriterionCategoryAvailability,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.common.CriterionCategoryAvailability.displayName="proto.google.ads.googleads.v1.common.CriterionCategoryAvailability"),proto.google.ads.googleads.v1.common.CriterionCategoryAvailability.repeatedFields_=[2],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.common.CriterionCategoryAvailability.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.common.CriterionCategoryAvailability.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.common.CriterionCategoryAvailability.toObject=function(includeInstance,msg){var f,obj={channel:(f=msg.getChannel())&&proto.google.ads.googleads.v1.common.CriterionCategoryChannelAvailability.toObject(includeInstance,f),localeList:jspb.Message.toObjectList(msg.getLocaleList(),proto.google.ads.googleads.v1.common.CriterionCategoryLocaleAvailability.toObject,includeInstance)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.common.CriterionCategoryAvailability.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.common.CriterionCategoryAvailability;return proto.google.ads.googleads.v1.common.CriterionCategoryAvailability.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.common.CriterionCategoryAvailability.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=new proto.google.ads.googleads.v1.common.CriterionCategoryChannelAvailability;reader.readMessage(value,proto.google.ads.googleads.v1.common.CriterionCategoryChannelAvailability.deserializeBinaryFromReader),msg.setChannel(value);break;case 2:value=new proto.google.ads.googleads.v1.common.CriterionCategoryLocaleAvailability;reader.readMessage(value,proto.google.ads.googleads.v1.common.CriterionCategoryLocaleAvailability.deserializeBinaryFromReader),msg.addLocale(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.common.CriterionCategoryAvailability.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.common.CriterionCategoryAvailability.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.common.CriterionCategoryAvailability.serializeBinaryToWriter=function(message,writer){var f=void 0;null!=(f=message.getChannel())&&writer.writeMessage(1,f,proto.google.ads.googleads.v1.common.CriterionCategoryChannelAvailability.serializeBinaryToWriter),0<(f=message.getLocaleList()).length&&writer.writeRepeatedMessage(2,f,proto.google.ads.googleads.v1.common.CriterionCategoryLocaleAvailability.serializeBinaryToWriter)},proto.google.ads.googleads.v1.common.CriterionCategoryAvailability.prototype.getChannel=function(){return jspb.Message.getWrapperField(this,proto.google.ads.googleads.v1.common.CriterionCategoryChannelAvailability,1)},proto.google.ads.googleads.v1.common.CriterionCategoryAvailability.prototype.setChannel=function(value){jspb.Message.setWrapperField(this,1,value)},proto.google.ads.googleads.v1.common.CriterionCategoryAvailability.prototype.clearChannel=function(){this.setChannel(void 0)},proto.google.ads.googleads.v1.common.CriterionCategoryAvailability.prototype.hasChannel=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v1.common.CriterionCategoryAvailability.prototype.getLocaleList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v1.common.CriterionCategoryLocaleAvailability,2)},proto.google.ads.googleads.v1.common.CriterionCategoryAvailability.prototype.setLocaleList=function(value){jspb.Message.setRepeatedWrapperField(this,2,value)},proto.google.ads.googleads.v1.common.CriterionCategoryAvailability.prototype.addLocale=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,2,opt_value,proto.google.ads.googleads.v1.common.CriterionCategoryLocaleAvailability,opt_index)},proto.google.ads.googleads.v1.common.CriterionCategoryAvailability.prototype.clearLocaleList=function(){this.setLocaleList([])},proto.google.ads.googleads.v1.common.CriterionCategoryChannelAvailability=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v1.common.CriterionCategoryChannelAvailability.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v1.common.CriterionCategoryChannelAvailability,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.common.CriterionCategoryChannelAvailability.displayName="proto.google.ads.googleads.v1.common.CriterionCategoryChannelAvailability"),proto.google.ads.googleads.v1.common.CriterionCategoryChannelAvailability.repeatedFields_=[3],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.common.CriterionCategoryChannelAvailability.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.common.CriterionCategoryChannelAvailability.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.common.CriterionCategoryChannelAvailability.toObject=function(includeInstance,msg){var f,obj={availabilityMode:jspb.Message.getFieldWithDefault(msg,1,0),advertisingChannelType:jspb.Message.getFieldWithDefault(msg,2,0),advertisingChannelSubTypeList:jspb.Message.getRepeatedField(msg,3),includeDefaultChannelSubType:(f=msg.getIncludeDefaultChannelSubType())&&google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.common.CriterionCategoryChannelAvailability.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.common.CriterionCategoryChannelAvailability;return proto.google.ads.googleads.v1.common.CriterionCategoryChannelAvailability.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.common.CriterionCategoryChannelAvailability.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readEnum();msg.setAvailabilityMode(value);break;case 2:value=reader.readEnum();msg.setAdvertisingChannelType(value);break;case 3:value=reader.readPackedEnum();msg.setAdvertisingChannelSubTypeList(value);break;case 4:value=new google_protobuf_wrappers_pb.BoolValue;reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader),msg.setIncludeDefaultChannelSubType(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.common.CriterionCategoryChannelAvailability.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.common.CriterionCategoryChannelAvailability.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.common.CriterionCategoryChannelAvailability.serializeBinaryToWriter=function(message,writer){var f=void 0;0!==(f=message.getAvailabilityMode())&&writer.writeEnum(1,f),0!==(f=message.getAdvertisingChannelType())&&writer.writeEnum(2,f),0<(f=message.getAdvertisingChannelSubTypeList()).length&&writer.writePackedEnum(3,f),null!=(f=message.getIncludeDefaultChannelSubType())&&writer.writeMessage(4,f,google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter)},proto.google.ads.googleads.v1.common.CriterionCategoryChannelAvailability.prototype.getAvailabilityMode=function(){return jspb.Message.getFieldWithDefault(this,1,0)},proto.google.ads.googleads.v1.common.CriterionCategoryChannelAvailability.prototype.setAvailabilityMode=function(value){jspb.Message.setProto3EnumField(this,1,value)},proto.google.ads.googleads.v1.common.CriterionCategoryChannelAvailability.prototype.getAdvertisingChannelType=function(){return jspb.Message.getFieldWithDefault(this,2,0)},proto.google.ads.googleads.v1.common.CriterionCategoryChannelAvailability.prototype.setAdvertisingChannelType=function(value){jspb.Message.setProto3EnumField(this,2,value)},proto.google.ads.googleads.v1.common.CriterionCategoryChannelAvailability.prototype.getAdvertisingChannelSubTypeList=function(){return jspb.Message.getRepeatedField(this,3)},proto.google.ads.googleads.v1.common.CriterionCategoryChannelAvailability.prototype.setAdvertisingChannelSubTypeList=function(value){jspb.Message.setField(this,3,value||[])},proto.google.ads.googleads.v1.common.CriterionCategoryChannelAvailability.prototype.addAdvertisingChannelSubType=function(value,opt_index){jspb.Message.addToRepeatedField(this,3,value,opt_index)},proto.google.ads.googleads.v1.common.CriterionCategoryChannelAvailability.prototype.clearAdvertisingChannelSubTypeList=function(){this.setAdvertisingChannelSubTypeList([])},proto.google.ads.googleads.v1.common.CriterionCategoryChannelAvailability.prototype.getIncludeDefaultChannelSubType=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.BoolValue,4)},proto.google.ads.googleads.v1.common.CriterionCategoryChannelAvailability.prototype.setIncludeDefaultChannelSubType=function(value){jspb.Message.setWrapperField(this,4,value)},proto.google.ads.googleads.v1.common.CriterionCategoryChannelAvailability.prototype.clearIncludeDefaultChannelSubType=function(){this.setIncludeDefaultChannelSubType(void 0)},proto.google.ads.googleads.v1.common.CriterionCategoryChannelAvailability.prototype.hasIncludeDefaultChannelSubType=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v1.common.CriterionCategoryLocaleAvailability=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.common.CriterionCategoryLocaleAvailability,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.common.CriterionCategoryLocaleAvailability.displayName="proto.google.ads.googleads.v1.common.CriterionCategoryLocaleAvailability"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.common.CriterionCategoryLocaleAvailability.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.common.CriterionCategoryLocaleAvailability.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.common.CriterionCategoryLocaleAvailability.toObject=function(includeInstance,msg){var f,obj={availabilityMode:jspb.Message.getFieldWithDefault(msg,1,0),countryCode:(f=msg.getCountryCode())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),languageCode:(f=msg.getLanguageCode())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.common.CriterionCategoryLocaleAvailability.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.common.CriterionCategoryLocaleAvailability;return proto.google.ads.googleads.v1.common.CriterionCategoryLocaleAvailability.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.common.CriterionCategoryLocaleAvailability.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readEnum();msg.setAvailabilityMode(value);break;case 2:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setCountryCode(value);break;case 3:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setLanguageCode(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.common.CriterionCategoryLocaleAvailability.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.common.CriterionCategoryLocaleAvailability.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.common.CriterionCategoryLocaleAvailability.serializeBinaryToWriter=function(message,writer){var f=void 0;0!==(f=message.getAvailabilityMode())&&writer.writeEnum(1,f),null!=(f=message.getCountryCode())&&writer.writeMessage(2,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getLanguageCode())&&writer.writeMessage(3,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter)},proto.google.ads.googleads.v1.common.CriterionCategoryLocaleAvailability.prototype.getAvailabilityMode=function(){return jspb.Message.getFieldWithDefault(this,1,0)},proto.google.ads.googleads.v1.common.CriterionCategoryLocaleAvailability.prototype.setAvailabilityMode=function(value){jspb.Message.setProto3EnumField(this,1,value)},proto.google.ads.googleads.v1.common.CriterionCategoryLocaleAvailability.prototype.getCountryCode=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,2)},proto.google.ads.googleads.v1.common.CriterionCategoryLocaleAvailability.prototype.setCountryCode=function(value){jspb.Message.setWrapperField(this,2,value)},proto.google.ads.googleads.v1.common.CriterionCategoryLocaleAvailability.prototype.clearCountryCode=function(){this.setCountryCode(void 0)},proto.google.ads.googleads.v1.common.CriterionCategoryLocaleAvailability.prototype.hasCountryCode=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v1.common.CriterionCategoryLocaleAvailability.prototype.getLanguageCode=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,3)},proto.google.ads.googleads.v1.common.CriterionCategoryLocaleAvailability.prototype.setLanguageCode=function(value){jspb.Message.setWrapperField(this,3,value)},proto.google.ads.googleads.v1.common.CriterionCategoryLocaleAvailability.prototype.clearLanguageCode=function(){this.setLanguageCode(void 0)},proto.google.ads.googleads.v1.common.CriterionCategoryLocaleAvailability.prototype.hasLanguageCode=function(){return null!=jspb.Message.getField(this,3)},goog.object.extend(exports,proto.google.ads.googleads.v1.common);