import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IsString, IsInt } from 'class-validator';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  value: Number;

  @Prop()
  quantity: Number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);