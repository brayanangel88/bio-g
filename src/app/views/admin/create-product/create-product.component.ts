import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/controllers/product/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  productForm: FormGroup;

  constructor(private fb: FormBuilder,private productService: ProductService) {
    this.productForm = this.fb.group({
      id: [null],
      code: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: [null],
      price: [null, [Validators.required, Validators.min(0)]],
      dateCreated: [new Date().toISOString().slice(0, 10), Validators.required],
      dateUpdated: [new Date().toISOString().slice(0, 10), Validators.required],
      user: [null]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.productForm.valid) {
      const product = this.productForm.value;
      product.dateCreated = new Date(product.dateCreated).toISOString();
      product.dateUpdated = new Date(product.dateUpdated).toISOString();
      this.productService.postProduct(this.productForm.value).subscribe(data => {
        console.log(data);
      });
    }
  }
}
