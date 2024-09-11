import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './views/product/product.component';

const routes: Routes = [
  { path: '', redirectTo: '/product', pathMatch: 'full' }, // Redirecciona a la ruta por defecto
  { path: 'product', component: ProductComponent },
  { path: '**', redirectTo: '/home' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
