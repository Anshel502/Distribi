import { UpdateProductDto } from "../dto/update-product.dto.js";

export class Product {
// entity Es un modelo de datos que nos permite definir la estructura de lo que vamos a almacenar en la bd
constructor(
    public id: String, 
    //hacer que stock sea mayor a 0 y entero
    public stock: number, 
    public price: number, 
    public categoria? : String
){
}

updateWith({ stock, price, categoria }: UpdateWith){
    this.stock = stock;
    this.price = price;
    this.categoria = categoria;
}
}



interface UpdateWith {
    stock: number;
    price: number;
    categoria?: String;
}

