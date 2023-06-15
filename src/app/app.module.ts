import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeModule } from './home/home.module';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartModule } from './cart/cart.module';
import { HomeHeadingComponent } from './home-heading/home-heading.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderModule } from './order/order.module';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './auth.interceptor';
import { UserModule } from './user/user.module';
import { RouterModule } from '@angular/router';
import { BusinessModule } from './business/business.module';
import { LoginPromptComponent } from './home/login-prompt/login-prompt.component';
import { OrderItemModalComponent } from './business/order-item-modal/order-item-modal.component';
import { ConfirmOrderModalComponent } from './confirm-order-modal/confirm-order-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginModalComponent,
    HomeHeadingComponent,
    CheckoutComponent,
    LoginPromptComponent,
    OrderItemModalComponent,
    ConfirmOrderModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomeModule,
    UserModule,
    HttpClientModule,
    FormsModule,
    CartModule,
    OrderModule,
    BusinessModule,
    MatIconModule,
    RouterModule
  ],
  exports:[MatIconModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
