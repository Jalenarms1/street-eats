import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { CartService } from '../cart.service';
import { OrderItemService } from '../order-item.service';

@Component({
  selector: 'app-confirm-order-modal',
  templateUrl: './confirm-order-modal.component.html',
  styleUrls: ['./confirm-order-modal.component.css']
})
export class ConfirmOrderModalComponent implements OnInit {
  showConfirmCancel: boolean = false
  constructor(public orderS: OrderService, public cartS: CartService, public orderItemS: OrderItemService) { }

  ngOnInit(): void {
    this.orderS.orderTotal = ((this.cartS.cart.total * .088) + this.cartS.cart.total).toFixed(2)
  }

  closeCheckoutModal() {
    this.orderS.checkoutModalOpen = false

  }

  toggleConfirmCancel() {
    this.showConfirmCancel = true
  }

  submitOrder() {
    this.orderS.submitOrder({...this.cartS.cart, total: this.orderS.orderTotal as number})
    this.closeCheckoutModal()
  }

}
