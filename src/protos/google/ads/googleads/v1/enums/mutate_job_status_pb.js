var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v1.enums.MutateJobStatusEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.enums.MutateJobStatusEnum.MutateJobStatus",null,global),proto.google.ads.googleads.v1.enums.MutateJobStatusEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.enums.MutateJobStatusEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.enums.MutateJobStatusEnum.displayName="proto.google.ads.googleads.v1.enums.MutateJobStatusEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.enums.MutateJobStatusEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.enums.MutateJobStatusEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.enums.MutateJobStatusEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.enums.MutateJobStatusEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.enums.MutateJobStatusEnum;return proto.google.ads.googleads.v1.enums.MutateJobStatusEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.enums.MutateJobStatusEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v1.enums.MutateJobStatusEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.enums.MutateJobStatusEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.enums.MutateJobStatusEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v1.enums.MutateJobStatusEnum.MutateJobStatus={UNSPECIFIED:0,UNKNOWN:1,PENDING:2,RUNNING:3,DONE:4},goog.object.extend(exports,proto.google.ads.googleads.v1.enums);