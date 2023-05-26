import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeParentComponent } from './home/home-parent/home-parent.component';
import { CartParentComponent } from './cart/cart-parent/cart-parent.component';
import { OrderParentComponent } from './order/order-parent/order-parent.component';
import { UserPageComponent } from './user/user-page/user-page.component';
import { BusinessParentComponent } from './business/business-parent/business-parent.component';

const routes: Routes = [
  {
    path: '', component: HomeParentComponent
  },
  {
    path: 'cart', component: CartParentComponent
  },
  {
    path: 'orders', component: OrderParentComponent
  },
  {
    path: 'user', component: UserPageComponent
  },
  {
    path: 'business/:id', component: BusinessParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
