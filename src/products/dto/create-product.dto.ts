import { IsString, IsInt,IsNumber } from 'class-validator';


export class CreateProductDto {

  @IsString()
  name: string;

  @IsNumber()
  value: number;

  @IsInt()
  quantity: number;
}