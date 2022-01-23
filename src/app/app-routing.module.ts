import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  { path: '', redirectTo : '/home',pathMatch:'full' },
  { path: 'home', component: HomeComponent},

  { path: 'products', component: ProductComponent },
  { path: 'productDetails/:id', component: ProductDetailsComponent },

  { path: 'customers', component: CustomerComponent },
  { path: 'customerDetails', component: CustomerDetailsComponent },

  { path: 'customerDetails/:id', component: CustomerDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
