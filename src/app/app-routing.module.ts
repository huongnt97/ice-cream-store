import { ShopDetailComponent } from './shop-detail/shop-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'product', component: ProductComponent,
      },
      { path: 'product/:id', component: DetailProductComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'profile', component: ShopDetailComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  {
    path: '**', component: NotFoundComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
