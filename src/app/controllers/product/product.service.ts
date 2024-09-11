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
      imageUrl: '../../../assets/images/1.jpeg'
    },
    {
      id: 2,
      name: 'Proteina',
      description: 'Description of Product 2',
      imageUrl: '' // Imagen vacía para probar el pipe defaultImage
    },
    {
      id: 3,
      name: 'Colageno',
      description: 'Description of Product 3',
      imageUrl: null 
    }
  ];

  constructor() { }

  getProducts(): Observable<ProductModel[]> {
    return of(this.mockProducts);
  }
}
