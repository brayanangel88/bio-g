import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { DefaultImagePipe } from '../pipes/default-image.pipe';



@NgModule({
  declarations: [
    ProductComponent,
    DefaultImagePipe 

  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductComponent
  ]
})
export class ViewsModule { }
