import { AuthenticationGuard } from './service/guards/authentication.guard';
import { ProductService } from './service/product.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shop-feature/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './common-feature/not-found/not-found.component';
import { LoginComponent } from './common-feature/login/login.component';
import { DashboardComponent } from './shop-feature/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './shop-feature/product/product.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProfileComponent } from './common-feature/profile/profile.component';
import { OrderComponent } from './shop-feature/order/order.component';
import { ChartModule } from 'angular-highcharts';
import { AdministrationComponent } from './administration/administration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HighchartsChartModule } from 'highcharts-angular';
import { ReportComponent } from './admin-feature/report/report.component';
import { ShopReportComponent } from './admin-feature/shop-report/shop-report.component';
import { ShopComponent } from './admin-feature/shop/shop.component';
import { ShopDetailComponent } from './admin-feature/shop-detail/shop-detail.component';
import { TokenInterceptor } from './service/TokenInterceptor ';
import { ProductMangementComponent } from './admin-feature/product-mangement/product-mangement.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxSpinnerComponent } from './common-feature/ngx-spinner/ngx-spinner.component';
import { RoleGuard } from './service/guards/role.guard';
import { DetailProductComponent } from './admin-feature/detail-product/detail-product.component';
import { RegisterComponent } from './common-feature/register/register.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import { DatePipe } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ShopRequestComponent } from './admin-feature/shop-request/shop-request.component';
import { ReplyRegisterComponent } from './common-feature/reply-register/reply-register.component';
import { RouterModule } from '@angular/router';

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
    AdministrationComponent,
    ReportComponent,
    ShopReportComponent,
    ProductMangementComponent,
    NgxSpinnerComponent,
    RegisterComponent,
    ShopRequestComponent,
    ReplyRegisterComponent,

  ],
  imports: [
BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
    HighchartsChartModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    StoreModule,
    RouterModule
  ],
  providers: [
    ProductService,
    AuthenticationGuard,
    RoleGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
