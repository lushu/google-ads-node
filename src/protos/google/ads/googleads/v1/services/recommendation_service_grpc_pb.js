"use strict";var grpc=require("grpc"),google_ads_googleads_v1_services_recommendation_service_pb=require("../../../../../google/ads/googleads/v1/services/recommendation_service_pb.js"),google_ads_googleads_v1_common_extensions_pb=require("../../../../../google/ads/googleads/v1/common/extensions_pb.js"),google_ads_googleads_v1_enums_keyword_match_type_pb=require("../../../../../google/ads/googleads/v1/enums/keyword_match_type_pb.js"),google_ads_googleads_v1_resources_ad_pb=require("../../../../../google/ads/googleads/v1/resources/ad_pb.js"),google_ads_googleads_v1_resources_recommendation_pb=require("../../../../../google/ads/googleads/v1/resources/recommendation_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_rpc_status_pb=require("../../../../../google/rpc/status_pb.js");function serialize_google_ads_googleads_v1_resources_Recommendation(arg){if(!(arg instanceof google_ads_googleads_v1_resources_recommendation_pb.Recommendation))throw new Error("Expected argument of type google.ads.googleads.v1.resources.Recommendation");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v1_resources_Recommendation(buffer_arg){return google_ads_googleads_v1_resources_recommendation_pb.Recommendation.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v1_services_ApplyRecommendationRequest(arg){if(!(arg instanceof google_ads_googleads_v1_services_recommendation_service_pb.ApplyRecommendationRequest))throw new Error("Expected argument of type google.ads.googleads.v1.services.ApplyRecommendationRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v1_services_ApplyRecommendationRequest(buffer_arg){return google_ads_googleads_v1_services_recommendation_service_pb.ApplyRecommendationRequest.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v1_services_ApplyRecommendationResponse(arg){if(!(arg instanceof google_ads_googleads_v1_services_recommendation_service_pb.ApplyRecommendationResponse))throw new Error("Expected argument of type google.ads.googleads.v1.services.ApplyRecommendationResponse");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v1_services_ApplyRecommendationResponse(buffer_arg){return google_ads_googleads_v1_services_recommendation_service_pb.ApplyRecommendationResponse.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v1_services_DismissRecommendationRequest(arg){if(!(arg instanceof google_ads_googleads_v1_services_recommendation_service_pb.DismissRecommendationRequest))throw new Error("Expected argument of type google.ads.googleads.v1.services.DismissRecommendationRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v1_services_DismissRecommendationRequest(buffer_arg){return google_ads_googleads_v1_services_recommendation_service_pb.DismissRecommendationRequest.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v1_services_DismissRecommendationResponse(arg){if(!(arg instanceof google_ads_googleads_v1_services_recommendation_service_pb.DismissRecommendationResponse))throw new Error("Expected argument of type google.ads.googleads.v1.services.DismissRecommendationResponse");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v1_services_DismissRecommendationResponse(buffer_arg){return google_ads_googleads_v1_services_recommendation_service_pb.DismissRecommendationResponse.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v1_services_GetRecommendationRequest(arg){if(!(arg instanceof google_ads_googleads_v1_services_recommendation_service_pb.GetRecommendationRequest))throw new Error("Expected argument of type google.ads.googleads.v1.services.GetRecommendationRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v1_services_GetRecommendationRequest(buffer_arg){return google_ads_googleads_v1_services_recommendation_service_pb.GetRecommendationRequest.deserializeBinary(new Uint8Array(buffer_arg))}var RecommendationServiceService=exports.RecommendationServiceService={getRecommendation:{path:"/google.ads.googleads.v1.services.RecommendationService/GetRecommendation",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v1_services_recommendation_service_pb.GetRecommendationRequest,responseType:google_ads_googleads_v1_resources_recommendation_pb.Recommendation,requestSerialize:serialize_google_ads_googleads_v1_services_GetRecommendationRequest,requestDeserialize:deserialize_google_ads_googleads_v1_services_GetRecommendationRequest,responseSerialize:serialize_google_ads_googleads_v1_resources_Recommendation,responseDeserialize:deserialize_google_ads_googleads_v1_resources_Recommendation},applyRecommendation:{path:"/google.ads.googleads.v1.services.RecommendationService/ApplyRecommendation",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v1_services_recommendation_service_pb.ApplyRecommendationRequest,responseType:google_ads_googleads_v1_services_recommendation_service_pb.ApplyRecommendationResponse,requestSerialize:serialize_google_ads_googleads_v1_services_ApplyRecommendationRequest,requestDeserialize:deserialize_google_ads_googleads_v1_services_ApplyRecommendationRequest,responseSerialize:serialize_google_ads_googleads_v1_services_ApplyRecommendationResponse,responseDeserialize:deserialize_google_ads_googleads_v1_services_ApplyRecommendationResponse},dismissRecommendation:{path:"/google.ads.googleads.v1.services.RecommendationService/DismissRecommendation",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v1_services_recommendation_service_pb.DismissRecommendationRequest,responseType:google_ads_googleads_v1_services_recommendation_service_pb.DismissRecommendationResponse,requestSerialize:serialize_google_ads_googleads_v1_services_DismissRecommendationRequest,requestDeserialize:deserialize_google_ads_googleads_v1_services_DismissRecommendationRequest,responseSerialize:serialize_google_ads_googleads_v1_services_DismissRecommendationResponse,responseDeserialize:deserialize_google_ads_googleads_v1_services_DismissRecommendationResponse}};exports.RecommendationServiceClient=grpc.makeGenericClientConstructor(RecommendationServiceService);