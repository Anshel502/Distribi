import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { Product } from './entities/product.entity.js';
import { v4 as Uuidv4 } from 'uuid';


@Injectable()
export class ProductsService {
  private products: Product[] = [];

  create(createProductDto: CreateProductDto) {
    const { stock, categoria, price } = createProductDto;
    const newProduct = new Product(Uuidv4(), stock, price, categoria);
    this.products.push(newProduct);
    return newProduct;
  }

  findAll() {
    return this.products;
  }

  findOne(id: string) {
    const product = this.products.find((product) => product.id == id);
    if (!product) {
      throw new NotFoundException(`Product with ${id} not found`);

    }
    return product;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }
//Esta es la tareaa. Hacerla funcionar en postman (este no sirve)
  remove(id: string) {
    const product = this.products.find((product) => product.id == id);
    if (product) {
      this.remove(id);
      console.log("Product delete success");
    }
    return `The ID #${id} doesnt exist in product`;


  }
}
