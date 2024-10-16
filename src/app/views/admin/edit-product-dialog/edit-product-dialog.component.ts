import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/controllers/product/product.service';

@Component({
  selector: 'edit-product-dialog',
  templateUrl: './edit-product-dialog.component.html',
  styleUrls: ['./edit-product-dialog.component.scss']
})
export class EditProductDialogComponent {
  productForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private productService: ProductService
  ) {
    this.productForm = this.fb.group({
      id: [data.id],
      code: [data.code, Validators.required],
      name: [data.name, Validators.required],
      description: [data.description, Validators.required],
      imageUrl: [data.imageUrl],
      price: [data.price, [Validators.required, Validators.min(0)]],
      dateCreated: [data.dateCreated],
      dateUpdated: [data.dateUpdated],
      user: [data.user],
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const product = this.productForm.value;
      product.dateCreated = new Date(product.dateCreated).toISOString();
      product.dateUpdated = new Date(product.dateUpdated).toISOString();
      this.productService.putProduct(this.productForm.value).subscribe(data => {
        this.dialogRef.close(data);
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
