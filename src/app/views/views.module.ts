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



@NgModule({
  declarations: [
    ProductComponent,
    DefaultImagePipe,
    NavbarComponent,
    CarouselComponent,
    HomeComponent 

  ],
  imports: [
    BrowserAnimationsModule, // Importa BrowserAnimationsModule
    MatCardModule, // Importa módulos de Angular Material
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    CommonModule,
    SwiperModule
  ],
  exports: [
    NavbarComponent,
    ProductComponent,
    HomeComponent
  ]
})
export class ViewsModule { }
