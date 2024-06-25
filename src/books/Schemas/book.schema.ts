import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BooksDocument = HydratedDocument<Books>;

@Schema()
export class Books {
  @Prop()
  name: string;

  @Prop()
  author: string;

  @Prop()
  ISBN: string;
}

export const BooksSchema = SchemaFactory.createForClass(Books);