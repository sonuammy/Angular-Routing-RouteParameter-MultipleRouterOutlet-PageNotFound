import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductsService {

  products: Product[];
  constructor()
  {
  this.products = [
  new Product(101, "Samsumg S8", 40000, "Samsung"),
  new Product(102, "Samsumg S9", 62000, "Samsung"),
  new Product(111, "iPhone 8", 60000, "Apple"),
  new Product(112, "iPhone 10", 98000, "Apple"),
  new Product(121, "Pixel 2", 53000, "Google"),
  new Product(122, "Pixel 3", 95000, "Google"),
  ];
  }
  getProductsByBrand(brandname: string): Product[]
  {
  var selectedProducts : Product[] = [];
  for (var i = 0; i < this.products.length; i++)
  {
  if (this.products[i].brand == brandname)
  {
  // console.log("brand name: "+brandname);
  selectedProducts.push(this.products[i]);
  // console.log(selectedProducts);
  }
  }
  return selectedProducts;
  }
}
