import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { NewProductComponent } from './new-product/new-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductDetailsComponent  } from './product-details/product-details.component';


const routes: Routes = [
  {path:'', component:AllProductsComponent},
  {path:'products/new', component:NewProductComponent},
  {path:'products/:id', component:UpdateProductComponent},
  {path:'productdetails/:id', component:ProductDetailsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
