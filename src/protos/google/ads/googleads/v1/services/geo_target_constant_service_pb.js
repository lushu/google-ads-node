var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v1_resources_geo_target_constant_pb=require("../../../../../google/ads/googleads/v1/resources/geo_target_constant_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js");goog.exportSymbol("proto.google.ads.googleads.v1.services.GeoTargetConstantSuggestion",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.services.GetGeoTargetConstantRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.GeoTargets",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.LocationNames",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsResponse",null,global),proto.google.ads.googleads.v1.services.GetGeoTargetConstantRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.services.GetGeoTargetConstantRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.services.GetGeoTargetConstantRequest.displayName="proto.google.ads.googleads.v1.services.GetGeoTargetConstantRequest"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.services.GetGeoTargetConstantRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.services.GetGeoTargetConstantRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.services.GetGeoTargetConstantRequest.toObject=function(includeInstance,msg){var obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.services.GetGeoTargetConstantRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.services.GetGeoTargetConstantRequest;return proto.google.ads.googleads.v1.services.GetGeoTargetConstantRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.services.GetGeoTargetConstantRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.services.GetGeoTargetConstantRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.services.GetGeoTargetConstantRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.services.GetGeoTargetConstantRequest.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResourceName()).length&&writer.writeString(1,f)},proto.google.ads.googleads.v1.services.GetGeoTargetConstantRequest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v1.services.GetGeoTargetConstantRequest.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.oneofGroups_)},goog.inherits(proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.displayName="proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest"),proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.oneofGroups_=[[1,2]],proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.QueryCase={QUERY_NOT_SET:0,LOCATION_NAMES:1,GEO_TARGETS:2},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.prototype.getQueryCase=function(){return jspb.Message.computeOneofCase(this,proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.toObject=function(includeInstance,msg){var f,obj={locale:(f=msg.getLocale())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),countryCode:(f=msg.getCountryCode())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),locationNames:(f=msg.getLocationNames())&&proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.LocationNames.toObject(includeInstance,f),geoTargets:(f=msg.getGeoTargets())&&proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.GeoTargets.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest;return proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 3:var value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setLocale(value);break;case 5:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setCountryCode(value);break;case 1:value=new proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.LocationNames;reader.readMessage(value,proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.LocationNames.deserializeBinaryFromReader),msg.setLocationNames(value);break;case 2:value=new proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.GeoTargets;reader.readMessage(value,proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.GeoTargets.deserializeBinaryFromReader),msg.setGeoTargets(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.serializeBinaryToWriter=function(message,writer){var f=void 0;null!=(f=message.getLocale())&&writer.writeMessage(3,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getCountryCode())&&writer.writeMessage(5,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getLocationNames())&&writer.writeMessage(1,f,proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.LocationNames.serializeBinaryToWriter),null!=(f=message.getGeoTargets())&&writer.writeMessage(2,f,proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.GeoTargets.serializeBinaryToWriter)},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.LocationNames=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.LocationNames.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.LocationNames,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.LocationNames.displayName="proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.LocationNames"),proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.LocationNames.repeatedFields_=[1],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.LocationNames.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.LocationNames.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.LocationNames.toObject=function(includeInstance,msg){var obj={namesList:jspb.Message.toObjectList(msg.getNamesList(),google_protobuf_wrappers_pb.StringValue.toObject,includeInstance)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.LocationNames.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.LocationNames;return proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.LocationNames.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.LocationNames.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.addNames(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.LocationNames.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.LocationNames.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.LocationNames.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getNamesList()).length&&writer.writeRepeatedMessage(1,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter)},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.LocationNames.prototype.getNamesList=function(){return jspb.Message.getRepeatedWrapperField(this,google_protobuf_wrappers_pb.StringValue,1)},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.LocationNames.prototype.setNamesList=function(value){jspb.Message.setRepeatedWrapperField(this,1,value)},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.LocationNames.prototype.addNames=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,1,opt_value,proto.google.protobuf.StringValue,opt_index)},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.LocationNames.prototype.clearNamesList=function(){this.setNamesList([])},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.GeoTargets=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.GeoTargets.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.GeoTargets,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.GeoTargets.displayName="proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.GeoTargets"),proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.GeoTargets.repeatedFields_=[1],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.GeoTargets.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.GeoTargets.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.GeoTargets.toObject=function(includeInstance,msg){var obj={geoTargetConstantsList:jspb.Message.toObjectList(msg.getGeoTargetConstantsList(),google_protobuf_wrappers_pb.StringValue.toObject,includeInstance)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.GeoTargets.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.GeoTargets;return proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.GeoTargets.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.GeoTargets.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.addGeoTargetConstants(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.GeoTargets.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.GeoTargets.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.GeoTargets.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getGeoTargetConstantsList()).length&&writer.writeRepeatedMessage(1,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter)},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.GeoTargets.prototype.getGeoTargetConstantsList=function(){return jspb.Message.getRepeatedWrapperField(this,google_protobuf_wrappers_pb.StringValue,1)},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.GeoTargets.prototype.setGeoTargetConstantsList=function(value){jspb.Message.setRepeatedWrapperField(this,1,value)},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.GeoTargets.prototype.addGeoTargetConstants=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,1,opt_value,proto.google.protobuf.StringValue,opt_index)},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.GeoTargets.prototype.clearGeoTargetConstantsList=function(){this.setGeoTargetConstantsList([])},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.prototype.getLocale=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,3)},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.prototype.setLocale=function(value){jspb.Message.setWrapperField(this,3,value)},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.prototype.clearLocale=function(){this.setLocale(void 0)},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.prototype.hasLocale=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.prototype.getCountryCode=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,5)},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.prototype.setCountryCode=function(value){jspb.Message.setWrapperField(this,5,value)},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.prototype.clearCountryCode=function(){this.setCountryCode(void 0)},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.prototype.hasCountryCode=function(){return null!=jspb.Message.getField(this,5)},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.prototype.getLocationNames=function(){return jspb.Message.getWrapperField(this,proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.LocationNames,1)},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.prototype.setLocationNames=function(value){jspb.Message.setOneofWrapperField(this,1,proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.oneofGroups_[0],value)},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.prototype.clearLocationNames=function(){this.setLocationNames(void 0)},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.prototype.hasLocationNames=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.prototype.getGeoTargets=function(){return jspb.Message.getWrapperField(this,proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.GeoTargets,2)},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.prototype.setGeoTargets=function(value){jspb.Message.setOneofWrapperField(this,2,proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.oneofGroups_[0],value)},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.prototype.clearGeoTargets=function(){this.setGeoTargets(void 0)},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsRequest.prototype.hasGeoTargets=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsResponse=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsResponse.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsResponse,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsResponse.displayName="proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsResponse"),proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsResponse.repeatedFields_=[1],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsResponse.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsResponse.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsResponse.toObject=function(includeInstance,msg){var obj={geoTargetConstantSuggestionsList:jspb.Message.toObjectList(msg.getGeoTargetConstantSuggestionsList(),proto.google.ads.googleads.v1.services.GeoTargetConstantSuggestion.toObject,includeInstance)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsResponse.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsResponse;return proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsResponse.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsResponse.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=new proto.google.ads.googleads.v1.services.GeoTargetConstantSuggestion;reader.readMessage(value,proto.google.ads.googleads.v1.services.GeoTargetConstantSuggestion.deserializeBinaryFromReader),msg.addGeoTargetConstantSuggestions(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsResponse.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsResponse.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsResponse.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getGeoTargetConstantSuggestionsList()).length&&writer.writeRepeatedMessage(1,f,proto.google.ads.googleads.v1.services.GeoTargetConstantSuggestion.serializeBinaryToWriter)},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsResponse.prototype.getGeoTargetConstantSuggestionsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.ads.googleads.v1.services.GeoTargetConstantSuggestion,1)},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsResponse.prototype.setGeoTargetConstantSuggestionsList=function(value){jspb.Message.setRepeatedWrapperField(this,1,value)},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsResponse.prototype.addGeoTargetConstantSuggestions=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,1,opt_value,proto.google.ads.googleads.v1.services.GeoTargetConstantSuggestion,opt_index)},proto.google.ads.googleads.v1.services.SuggestGeoTargetConstantsResponse.prototype.clearGeoTargetConstantSuggestionsList=function(){this.setGeoTargetConstantSuggestionsList([])},proto.google.ads.googleads.v1.services.GeoTargetConstantSuggestion=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.ads.googleads.v1.services.GeoTargetConstantSuggestion.repeatedFields_,null)},goog.inherits(proto.google.ads.googleads.v1.services.GeoTargetConstantSuggestion,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.services.GeoTargetConstantSuggestion.displayName="proto.google.ads.googleads.v1.services.GeoTargetConstantSuggestion"),proto.google.ads.googleads.v1.services.GeoTargetConstantSuggestion.repeatedFields_=[5],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.services.GeoTargetConstantSuggestion.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.services.GeoTargetConstantSuggestion.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.services.GeoTargetConstantSuggestion.toObject=function(includeInstance,msg){var f,obj={locale:(f=msg.getLocale())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),reach:(f=msg.getReach())&&google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance,f),searchTerm:(f=msg.getSearchTerm())&&google_protobuf_wrappers_pb.StringValue.toObject(includeInstance,f),geoTargetConstant:(f=msg.getGeoTargetConstant())&&google_ads_googleads_v1_resources_geo_target_constant_pb.GeoTargetConstant.toObject(includeInstance,f),geoTargetConstantParentsList:jspb.Message.toObjectList(msg.getGeoTargetConstantParentsList(),google_ads_googleads_v1_resources_geo_target_constant_pb.GeoTargetConstant.toObject,includeInstance)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.services.GeoTargetConstantSuggestion.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.services.GeoTargetConstantSuggestion;return proto.google.ads.googleads.v1.services.GeoTargetConstantSuggestion.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.services.GeoTargetConstantSuggestion.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){switch(reader.getFieldNumber()){case 1:var value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setLocale(value);break;case 2:value=new google_protobuf_wrappers_pb.Int64Value;reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader),msg.setReach(value);break;case 3:value=new google_protobuf_wrappers_pb.StringValue;reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader),msg.setSearchTerm(value);break;case 4:value=new google_ads_googleads_v1_resources_geo_target_constant_pb.GeoTargetConstant;reader.readMessage(value,google_ads_googleads_v1_resources_geo_target_constant_pb.GeoTargetConstant.deserializeBinaryFromReader),msg.setGeoTargetConstant(value);break;case 5:value=new google_ads_googleads_v1_resources_geo_target_constant_pb.GeoTargetConstant;reader.readMessage(value,google_ads_googleads_v1_resources_geo_target_constant_pb.GeoTargetConstant.deserializeBinaryFromReader),msg.addGeoTargetConstantParents(value);break;default:reader.skipField()}}return msg},proto.google.ads.googleads.v1.services.GeoTargetConstantSuggestion.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.services.GeoTargetConstantSuggestion.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.services.GeoTargetConstantSuggestion.serializeBinaryToWriter=function(message,writer){var f=void 0;null!=(f=message.getLocale())&&writer.writeMessage(1,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getReach())&&writer.writeMessage(2,f,google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter),null!=(f=message.getSearchTerm())&&writer.writeMessage(3,f,google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter),null!=(f=message.getGeoTargetConstant())&&writer.writeMessage(4,f,google_ads_googleads_v1_resources_geo_target_constant_pb.GeoTargetConstant.serializeBinaryToWriter),0<(f=message.getGeoTargetConstantParentsList()).length&&writer.writeRepeatedMessage(5,f,google_ads_googleads_v1_resources_geo_target_constant_pb.GeoTargetConstant.serializeBinaryToWriter)},proto.google.ads.googleads.v1.services.GeoTargetConstantSuggestion.prototype.getLocale=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,1)},proto.google.ads.googleads.v1.services.GeoTargetConstantSuggestion.prototype.setLocale=function(value){jspb.Message.setWrapperField(this,1,value)},proto.google.ads.googleads.v1.services.GeoTargetConstantSuggestion.prototype.clearLocale=function(){this.setLocale(void 0)},proto.google.ads.googleads.v1.services.GeoTargetConstantSuggestion.prototype.hasLocale=function(){return null!=jspb.Message.getField(this,1)},proto.google.ads.googleads.v1.services.GeoTargetConstantSuggestion.prototype.getReach=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.Int64Value,2)},proto.google.ads.googleads.v1.services.GeoTargetConstantSuggestion.prototype.setReach=function(value){jspb.Message.setWrapperField(this,2,value)},proto.google.ads.googleads.v1.services.GeoTargetConstantSuggestion.prototype.clearReach=function(){this.setReach(void 0)},proto.google.ads.googleads.v1.services.GeoTargetConstantSuggestion.prototype.hasReach=function(){return null!=jspb.Message.getField(this,2)},proto.google.ads.googleads.v1.services.GeoTargetConstantSuggestion.prototype.getSearchTerm=function(){return jspb.Message.getWrapperField(this,google_protobuf_wrappers_pb.StringValue,3)},proto.google.ads.googleads.v1.services.GeoTargetConstantSuggestion.prototype.setSearchTerm=function(value){jspb.Message.setWrapperField(this,3,value)},proto.google.ads.googleads.v1.services.GeoTargetConstantSuggestion.prototype.clearSearchTerm=function(){this.setSearchTerm(void 0)},proto.google.ads.googleads.v1.services.GeoTargetConstantSuggestion.prototype.hasSearchTerm=function(){return null!=jspb.Message.getField(this,3)},proto.google.ads.googleads.v1.services.GeoTargetConstantSuggestion.prototype.getGeoTargetConstant=function(){return jspb.Message.getWrapperField(this,google_ads_googleads_v1_resources_geo_target_constant_pb.GeoTargetConstant,4)},proto.google.ads.googleads.v1.services.GeoTargetConstantSuggestion.prototype.setGeoTargetConstant=function(value){jspb.Message.setWrapperField(this,4,value)},proto.google.ads.googleads.v1.services.GeoTargetConstantSuggestion.prototype.clearGeoTargetConstant=function(){this.setGeoTargetConstant(void 0)},proto.google.ads.googleads.v1.services.GeoTargetConstantSuggestion.prototype.hasGeoTargetConstant=function(){return null!=jspb.Message.getField(this,4)},proto.google.ads.googleads.v1.services.GeoTargetConstantSuggestion.prototype.getGeoTargetConstantParentsList=function(){return jspb.Message.getRepeatedWrapperField(this,google_ads_googleads_v1_resources_geo_target_constant_pb.GeoTargetConstant,5)},proto.google.ads.googleads.v1.services.GeoTargetConstantSuggestion.prototype.setGeoTargetConstantParentsList=function(value){jspb.Message.setRepeatedWrapperField(this,5,value)},proto.google.ads.googleads.v1.services.GeoTargetConstantSuggestion.prototype.addGeoTargetConstantParents=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,5,opt_value,proto.google.ads.googleads.v1.resources.GeoTargetConstant,opt_index)},proto.google.ads.googleads.v1.services.GeoTargetConstantSuggestion.prototype.clearGeoTargetConstantParentsList=function(){this.setGeoTargetConstantParentsList([])},goog.object.extend(exports,proto.google.ads.googleads.v1.services);