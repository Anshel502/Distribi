import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString } from "class-validator";


export class CreateProductDto {

  @IsString()
  @IsOptional()
  categoria: string;

  @IsNumber()
  @Type(() => Number)
  stock: number;

  @IsNumber()
  @Type(() => Number)
  price: number;
}
