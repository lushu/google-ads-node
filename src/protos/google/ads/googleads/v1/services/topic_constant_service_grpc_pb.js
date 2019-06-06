"use strict";var grpc=require("grpc"),google_ads_googleads_v1_services_topic_constant_service_pb=require("../../../../../google/ads/googleads/v1/services/topic_constant_service_pb.js"),google_ads_googleads_v1_resources_topic_constant_pb=require("../../../../../google/ads/googleads/v1/resources/topic_constant_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");function serialize_google_ads_googleads_v1_resources_TopicConstant(arg){if(!(arg instanceof google_ads_googleads_v1_resources_topic_constant_pb.TopicConstant))throw new Error("Expected argument of type google.ads.googleads.v1.resources.TopicConstant");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v1_resources_TopicConstant(buffer_arg){return google_ads_googleads_v1_resources_topic_constant_pb.TopicConstant.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v1_services_GetTopicConstantRequest(arg){if(!(arg instanceof google_ads_googleads_v1_services_topic_constant_service_pb.GetTopicConstantRequest))throw new Error("Expected argument of type google.ads.googleads.v1.services.GetTopicConstantRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v1_services_GetTopicConstantRequest(buffer_arg){return google_ads_googleads_v1_services_topic_constant_service_pb.GetTopicConstantRequest.deserializeBinary(new Uint8Array(buffer_arg))}var TopicConstantServiceService=exports.TopicConstantServiceService={getTopicConstant:{path:"/google.ads.googleads.v1.services.TopicConstantService/GetTopicConstant",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v1_services_topic_constant_service_pb.GetTopicConstantRequest,responseType:google_ads_googleads_v1_resources_topic_constant_pb.TopicConstant,requestSerialize:serialize_google_ads_googleads_v1_services_GetTopicConstantRequest,requestDeserialize:deserialize_google_ads_googleads_v1_services_GetTopicConstantRequest,responseSerialize:serialize_google_ads_googleads_v1_resources_TopicConstant,responseDeserialize:deserialize_google_ads_googleads_v1_resources_TopicConstant}};exports.TopicConstantServiceClient=grpc.makeGenericClientConstructor(TopicConstantServiceService);