import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import {ProductModel } from 'src/app/models/product/product.module';
import{ HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private urlEndPoint: string = 'http://localhost:9090/admin/products';

  constructor(private readonly http: HttpClient) { }

  getProducts(): Observable<ProductModel[]> {
    debugger;
    return this.http.get<ProductModel[]>(`${this.urlEndPoint}`)
    .pipe(map((response) => response as ProductModel[]));
  }

  postProduct(product: ProductModel): Observable<ProductModel> {
    return this.http.post<ProductModel>(`${this.urlEndPoint}`, product);
  }

  putProduct(product: ProductModel): Observable<ProductModel> {
    return this.http.put<ProductModel>(`${this.urlEndPoint}/`+product.id, product);
  }

  deleteProduct(id:number): Observable<ProductModel> {
    return this.http.delete<ProductModel>(`${this.urlEndPoint}/`+id);
  }
}
