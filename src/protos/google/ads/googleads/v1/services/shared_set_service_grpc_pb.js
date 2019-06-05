"use strict";var grpc=require("grpc"),google_ads_googleads_v1_services_shared_set_service_pb=require("../../../../../google/ads/googleads/v1/services/shared_set_service_pb.js"),google_ads_googleads_v1_resources_shared_set_pb=require("../../../../../google/ads/googleads/v1/resources/shared_set_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_protobuf_field_mask_pb=require("google-protobuf/google/protobuf/field_mask_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_rpc_status_pb=require("../../../../../google/rpc/status_pb.js");function serialize_google_ads_googleads_v1_resources_SharedSet(arg){if(!(arg instanceof google_ads_googleads_v1_resources_shared_set_pb.SharedSet))throw new Error("Expected argument of type google.ads.googleads.v1.resources.SharedSet");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v1_resources_SharedSet(buffer_arg){return google_ads_googleads_v1_resources_shared_set_pb.SharedSet.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v1_services_GetSharedSetRequest(arg){if(!(arg instanceof google_ads_googleads_v1_services_shared_set_service_pb.GetSharedSetRequest))throw new Error("Expected argument of type google.ads.googleads.v1.services.GetSharedSetRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v1_services_GetSharedSetRequest(buffer_arg){return google_ads_googleads_v1_services_shared_set_service_pb.GetSharedSetRequest.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v1_services_MutateSharedSetsRequest(arg){if(!(arg instanceof google_ads_googleads_v1_services_shared_set_service_pb.MutateSharedSetsRequest))throw new Error("Expected argument of type google.ads.googleads.v1.services.MutateSharedSetsRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v1_services_MutateSharedSetsRequest(buffer_arg){return google_ads_googleads_v1_services_shared_set_service_pb.MutateSharedSetsRequest.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v1_services_MutateSharedSetsResponse(arg){if(!(arg instanceof google_ads_googleads_v1_services_shared_set_service_pb.MutateSharedSetsResponse))throw new Error("Expected argument of type google.ads.googleads.v1.services.MutateSharedSetsResponse");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v1_services_MutateSharedSetsResponse(buffer_arg){return google_ads_googleads_v1_services_shared_set_service_pb.MutateSharedSetsResponse.deserializeBinary(new Uint8Array(buffer_arg))}var SharedSetServiceService=exports.SharedSetServiceService={getSharedSet:{path:"/google.ads.googleads.v1.services.SharedSetService/GetSharedSet",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v1_services_shared_set_service_pb.GetSharedSetRequest,responseType:google_ads_googleads_v1_resources_shared_set_pb.SharedSet,requestSerialize:serialize_google_ads_googleads_v1_services_GetSharedSetRequest,requestDeserialize:deserialize_google_ads_googleads_v1_services_GetSharedSetRequest,responseSerialize:serialize_google_ads_googleads_v1_resources_SharedSet,responseDeserialize:deserialize_google_ads_googleads_v1_resources_SharedSet},mutateSharedSets:{path:"/google.ads.googleads.v1.services.SharedSetService/MutateSharedSets",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v1_services_shared_set_service_pb.MutateSharedSetsRequest,responseType:google_ads_googleads_v1_services_shared_set_service_pb.MutateSharedSetsResponse,requestSerialize:serialize_google_ads_googleads_v1_services_MutateSharedSetsRequest,requestDeserialize:deserialize_google_ads_googleads_v1_services_MutateSharedSetsRequest,responseSerialize:serialize_google_ads_googleads_v1_services_MutateSharedSetsResponse,responseDeserialize:deserialize_google_ads_googleads_v1_services_MutateSharedSetsResponse}};exports.SharedSetServiceClient=grpc.makeGenericClientConstructor(SharedSetServiceService);