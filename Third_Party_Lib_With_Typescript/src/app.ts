import "reflect-metadata";
import { plainToClass } from 'class-transformer';
import { Product } from './product.model';

const products = [{ title: 'A book', price: 12.80 }, { title: 'A Carpet', price: 10.80 }];
// const p1 = new Product('A Book', 12.99);

// const loadedProducts = products.map(prod => {
//   return new Product(prod.title, prod.price);
// });

const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}
