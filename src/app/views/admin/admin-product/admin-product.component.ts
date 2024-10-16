import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/controllers/product/product.service';
import { ProductModel } from 'src/app/models/product/product.module';
import { MatDialog } from '@angular/material/dialog';
import { EditProductDialogComponent } from '../edit-product-dialog/edit-product-dialog.component';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent implements OnInit {

  displayedColumns: string[] = ['id', 'code', 'name', 'description', 'price', 'dateCreated', 'dateUpdated', 'user', 'actions'];
  products! :ProductModel[];

  constructor(private dialog: MatDialog,private productService: ProductService,private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  openEditDialog(product: ProductModel): void {
    const dialogRef = this.dialog.open(EditProductDialogComponent, {
      data: { ...product }
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      if (result) {
        this.updateProduct(result);
      }
    });
  }

  updateProduct(updatedProduct: ProductModel): void {
    const index = this.products.findIndex(product => product.id === updatedProduct.id);
    if (index > -1) {
      this.products[index] = updatedProduct;
      this.loadProducts();
    }
  }

  deleteProduct(id: number): void {
    const confirmMessage = '¿Estás seguro de que deseas eliminar este producto?';

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirmar Eliminación',
        message: confirmMessage,
        confirmText: 'Eliminar',
        cancelText: 'Cancelar'
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      debugger; 
      if (result) {
        this.productService.deleteProduct(id).subscribe(() => {
          this.loadProducts();
        });
      }
    });
  }
}
