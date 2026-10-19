import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProductDto {
  @IsString()
  @IsOptional()
  categoria?: string;
//hacer que sea un numero mayor o igual a 0
  @IsNumber()
  @Type(() => Number)
  stock: number;

  @IsNumber()
  @Type(() => Number)
  price: number;
}

