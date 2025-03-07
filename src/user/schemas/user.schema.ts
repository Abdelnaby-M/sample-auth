import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema, Types } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true }) name: string;
  @Prop({ required: true, unique: true }) email: string;
  @Prop({ required: true, select: false }) password: string;
  @Prop({ type: Date, default: Date.now }) createdAt: Date;
  @Prop({ type: Date }) updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);