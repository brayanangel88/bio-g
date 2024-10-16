import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CreateProductComponent } from './views/admin/create-product/create-product.component';
import { AdminProductComponent } from './views/admin/admin-product/admin-product.component';
import { RegisterUserComponent } from './views/register-user/register-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirecciona a la ruta por defecto
  { path: 'home', component: HomeComponent },
  { path: 'register-user', component: RegisterUserComponent },
  { path: 'create-product', component: CreateProductComponent },
  { path: 'admin-product', component: AdminProductComponent },
  { path: '**', redirectTo: '/home' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
