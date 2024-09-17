import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {ProductModel } from 'src/app/models/product/product.module';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private mockProducts: ProductModel[] = [
    {
      id: 1,
      name: 'Te Verde',
      description: 'Description of Product 1',
      imageUrl: null
    },
    {
      id: 2,
      name: 'Proteina',
      description: 'Description of Product 2',
      imageUrl: '../../../assets/images/proteina-product.jpeg'
    },
    {
      id: 3,
      name: 'Colageno',
      description: 'Description of Product 3',
      imageUrl: '../../../assets/images/colageno-product.jpeg'
    }
  ];

  constructor() { }

  getProducts(): Observable<ProductModel[]> {
    return of(this.mockProducts);
  }
}
