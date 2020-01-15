import { OrderComponent } from './shop-feature/order/order.component';
import { ProfileComponent } from './common-feature/profile/profile.component';
import { AuthenticationGuard } from './service/guards/authentication.guard';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './common-feature/login/login.component';
import { DashboardComponent } from './shop-feature/dashboard/dashboard.component';
import { DetailProductComponent } from './admin-feature/detail-product/detail-product.component';
import { ProductComponent } from './shop-feature/product/product.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './common-feature/not-found/not-found.component';
import { AdministrationComponent } from './administration/administration.component';
import { ReportComponent } from './admin-feature/report/report.component';
import { ShopReportComponent } from './admin-feature/shop-report/shop-report.component';
import { ShopDetailComponent } from './admin-feature/shop-detail/shop-detail.component';
import { ProductMangementComponent } from './admin-feature/product-mangement/product-mangement.component';
import { Role } from './models/role';
import { RoleGuard } from './service/guards/role.guard';
import { ShopRequestComponent } from './admin-feature/shop-request/shop-request.component';
import { ReplyRegisterComponent } from './common-feature/reply-register/reply-register.component';
import { UserComponent } from './admin-feature/user/user.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [RoleGuard],
    children: [
      {
        path: 'products', component: ProductComponent,
      },

      { path: 'dashboard', component: DashboardComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'order', component: OrderComponent },
      { path: '', redirectTo: '/home/dashboard', pathMatch: 'full' },
    ],
  },
  {
    path: 'administration', component: AdministrationComponent,
    canActivate: [AuthenticationGuard],
    data: { roles: [Role.Admin] },
    children: [
      {
        path: 'report', component: ReportComponent,
        children: [
          {
            path: 'shopReport', component: ShopReportComponent
          },
          {
            path: 'shopReport/:id', component: ShopReportComponent
          },
        ]
      },
      {
        path: 'productManagement', component: ProductMangementComponent
      },
      { path: 'productManagement/:id', component: DetailProductComponent },
      {
        path: 'shopRequest', component: ShopRequestComponent,
      },
      { path: 'profile-admin', component: ProfileComponent },
      {
        path: 'user', component: UserComponent,
      },
      { path: 'shop-detail', component: ShopDetailComponent },
      { path: '', redirectTo: '/administration/report', pathMatch: 'full' },
    ]
  },
  { path: 'reply', component: ReplyRegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '**', component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})

export class AppRoutingModule { }
