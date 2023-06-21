import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { CartService } from '../services/cart.service';
import { OrderItemService } from '../services/order-item.service';

declare let paypal: any;

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

    paypal.Buttons({
      createOrder: (data: any, actions: any) => {
        // Create the order and return the order ID
        // This is where you define your payment details
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: this.orderS.orderTotal as number // Example payment amount
              }
            }
          ]
        });
      },
      onApprove: (data: any, actions: any) => {
        // Capture the approved payment
        return actions.order.capture().then((details: any) => {
          // Payment successful, do further processing
          console.log(details);
          this.closeCheckoutModal()
          this.cartS.clearCart()
        });
      },
      onError: (err: any) => {
        // Handle payment error
        console.log(err);
      }
    }).render('#paypal-button-container');
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

  confirmCancel() {
    this.cartS.clearCart()
    this.orderS.orderTotal = 0
    this.closeCheckoutModal()
  }

}
