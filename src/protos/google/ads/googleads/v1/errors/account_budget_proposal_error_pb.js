var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js");goog.exportSymbol("proto.google.ads.googleads.v1.errors.AccountBudgetProposalErrorEnum",null,global),goog.exportSymbol("proto.google.ads.googleads.v1.errors.AccountBudgetProposalErrorEnum.AccountBudgetProposalError",null,global),proto.google.ads.googleads.v1.errors.AccountBudgetProposalErrorEnum=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v1.errors.AccountBudgetProposalErrorEnum,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v1.errors.AccountBudgetProposalErrorEnum.displayName="proto.google.ads.googleads.v1.errors.AccountBudgetProposalErrorEnum"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v1.errors.AccountBudgetProposalErrorEnum.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v1.errors.AccountBudgetProposalErrorEnum.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v1.errors.AccountBudgetProposalErrorEnum.toObject=function(includeInstance,msg){var obj={};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v1.errors.AccountBudgetProposalErrorEnum.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v1.errors.AccountBudgetProposalErrorEnum;return proto.google.ads.googleads.v1.errors.AccountBudgetProposalErrorEnum.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v1.errors.AccountBudgetProposalErrorEnum.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();){reader.getFieldNumber();reader.skipField()}return msg},proto.google.ads.googleads.v1.errors.AccountBudgetProposalErrorEnum.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v1.errors.AccountBudgetProposalErrorEnum.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v1.errors.AccountBudgetProposalErrorEnum.serializeBinaryToWriter=function(message,writer){},proto.google.ads.googleads.v1.errors.AccountBudgetProposalErrorEnum.AccountBudgetProposalError={UNSPECIFIED:0,UNKNOWN:1,FIELD_MASK_NOT_ALLOWED:2,IMMUTABLE_FIELD:3,REQUIRED_FIELD_MISSING:4,CANNOT_CANCEL_APPROVED_PROPOSAL:5,CANNOT_REMOVE_UNAPPROVED_BUDGET:6,CANNOT_REMOVE_RUNNING_BUDGET:7,CANNOT_END_UNAPPROVED_BUDGET:8,CANNOT_END_INACTIVE_BUDGET:9,BUDGET_NAME_REQUIRED:10,CANNOT_UPDATE_OLD_BUDGET:11,CANNOT_END_IN_PAST:12,CANNOT_EXTEND_END_TIME:13,PURCHASE_ORDER_NUMBER_REQUIRED:14,PENDING_UPDATE_PROPOSAL_EXISTS:15,MULTIPLE_BUDGETS_NOT_ALLOWED_FOR_UNAPPROVED_BILLING_SETUP:16,CANNOT_UPDATE_START_TIME_FOR_STARTED_BUDGET:17,SPENDING_LIMIT_LOWER_THAN_ACCRUED_COST_NOT_ALLOWED:18,UPDATE_IS_NO_OP:19,END_TIME_MUST_FOLLOW_START_TIME:20,BUDGET_DATE_RANGE_INCOMPATIBLE_WITH_BILLING_SETUP:21,NOT_AUTHORIZED:22,INVALID_BILLING_SETUP:23},goog.object.extend(exports,proto.google.ads.googleads.v1.errors);