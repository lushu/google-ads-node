var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")();goog.exportSymbol("proto.google.type.Quaternion",null,global),proto.google.type.Quaternion=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.type.Quaternion,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.type.Quaternion.displayName="proto.google.type.Quaternion"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.type.Quaternion.prototype.toObject=function(opt_includeInstance){return proto.google.type.Quaternion.toObject(opt_includeInstance,this)},proto.google.type.Quaternion.toObject=function(includeInstance,msg){var obj={x:+jspb.Message.getFieldWithDefault(msg,1,0),y:+jspb.Message.getFieldWithDefault(msg,2,0),z:+jspb.Message.getFieldWithDefault(msg,3,0),w:+jspb.Message.getFieldWithDefault(msg,4,0)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.type.Quaternion.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.type.Quaternion;return proto.google.type.Quaternion.deserializeBinaryFromReader(msg,reader)},proto.google.type.Quaternion.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=reader.readDouble();msg.setX(value);break;case 2:value=reader.readDouble(),msg.setY(value);break;case 3:value=reader.readDouble(),msg.setZ(value);break;case 4:value=reader.readDouble(),msg.setW(value);break;default:reader.skipField()}return msg},proto.google.type.Quaternion.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.type.Quaternion.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.type.Quaternion.serializeBinaryToWriter=function(message,writer){var f=void 0;0!==(f=message.getX())&&writer.writeDouble(1,f),0!==(f=message.getY())&&writer.writeDouble(2,f),0!==(f=message.getZ())&&writer.writeDouble(3,f),0!==(f=message.getW())&&writer.writeDouble(4,f)},proto.google.type.Quaternion.prototype.getX=function(){return+jspb.Message.getFieldWithDefault(this,1,0)},proto.google.type.Quaternion.prototype.setX=function(value){jspb.Message.setProto3FloatField(this,1,value)},proto.google.type.Quaternion.prototype.getY=function(){return+jspb.Message.getFieldWithDefault(this,2,0)},proto.google.type.Quaternion.prototype.setY=function(value){jspb.Message.setProto3FloatField(this,2,value)},proto.google.type.Quaternion.prototype.getZ=function(){return+jspb.Message.getFieldWithDefault(this,3,0)},proto.google.type.Quaternion.prototype.setZ=function(value){jspb.Message.setProto3FloatField(this,3,value)},proto.google.type.Quaternion.prototype.getW=function(){return+jspb.Message.getFieldWithDefault(this,4,0)},proto.google.type.Quaternion.prototype.setW=function(value){jspb.Message.setProto3FloatField(this,4,value)},goog.object.extend(exports,proto.google.type);