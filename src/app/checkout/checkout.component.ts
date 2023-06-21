import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from 'src/models/Cart';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  constructor(public cartS: CartService, public orderS: OrderService) { }

  ngOnInit(): void {
  }

  openCheckoutModal() {
    this.orderS.checkoutModalOpen = true
  }

  getTotalCartItems() {
    return this.cartS.cart.orderItems.reduce((acc, obj) => acc += obj.quantity, 0)
  }

}
