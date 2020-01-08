import { UserService } from './service/user.service';
import { AuthenticationGuard } from './service/guards/authentication.guard';
import { ProductService } from './service/product.service';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { OrderComponent } from './order/order.component';
import { ChartModule } from 'angular-highcharts';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ShopComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    DashboardComponent,
    ProductComponent,
    DetailProductComponent,
    ShopDetailComponent,
    ProfileComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartModule
  ],
  providers: [ProductService, AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
