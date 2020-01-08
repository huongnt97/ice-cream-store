import { OrderComponent } from './order/order.component';
import { ProfileComponent } from './profile/profile.component';
import { ShopComponent } from './shop/shop.component';
import { AuthenticationGuard } from './service/guards/authentication.guard';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';
import { NgModule, Component } from '@angular/core';
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
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: 'products', component: ProductComponent,
      },
      { path: 'products/:id', component: DetailProductComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'order', component: OrderComponent },
      {
        path: 'shop', component: ShopComponent,
      },
      { path: 'shop-detail', component: ShopDetailComponent },
      { path: '', redirectTo: '/home/dashboard', pathMatch: 'full' },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '**', component: NotFoundComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
