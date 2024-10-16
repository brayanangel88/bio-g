import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { DefaultImagePipe } from '../pipes/default-image.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Importa módulos de Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { CreateProductComponent } from './admin/create-product/create-product.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { EditProductDialogComponent } from './admin/edit-product-dialog/edit-product-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { RegisterUserComponent } from './register-user/register-user.component';




@NgModule({
  declarations: [
    ProductComponent,
    DefaultImagePipe,
    NavbarComponent,
    CarouselComponent,
    HomeComponent,
    CreateProductComponent,
    AdminProductComponent,
    EditProductDialogComponent,
    ConfirmDialogComponent,
    LoginDialogComponent,
    RegisterUserComponent 
  ],
  imports: [
    BrowserAnimationsModule, // Importa BrowserAnimationsModule
    MatCardModule, // Importa módulos de Angular Material
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    CommonModule,
    SwiperModule,
    BrowserModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
  ],
  exports: [
    NavbarComponent,
    ProductComponent,
    HomeComponent
  ]
})
export class ViewsModule { }
