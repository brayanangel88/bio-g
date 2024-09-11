import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/controllers/product/product.service';
import { ProductModel } from 'src/app/models/product/product.module';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products! :ProductModel[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

}
