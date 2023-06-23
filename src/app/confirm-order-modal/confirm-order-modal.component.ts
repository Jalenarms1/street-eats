import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { CartService } from '../services/cart.service';
import { OrderItemService } from '../services/order-item.service';
import { Business } from 'src/models/Business';
import { BusinessService } from '../services/business.service';

declare let paypal: any;

@Component({
  selector: 'app-confirm-order-modal',
  templateUrl: './confirm-order-modal.component.html',
  styleUrls: ['./confirm-order-modal.component.css']
})
export class ConfirmOrderModalComponent implements OnInit {
  showConfirmCancel: boolean = false
  checkoutBusiness: Business = {} as Business
  constructor(public orderS: OrderService, public cartS: CartService, public orderItemS: OrderItemService, private businessS: BusinessService) { }

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
          // details.payer.email_address
          console.log(details);
          this.submitOrder(details.payer.email_address)
          this.cartS.clearCart()
          this.orderS.flashModal('success')
        });
      },
      onError: (err: any) => {
        // Handle payment error
        console.log(err);
      }
    }).render('#paypal-button-container');

    this.checkoutBusiness = this.businessS.businesses.find(b => b.id == this.cartS.cart.businessId) as Business
  }

  closeCheckoutModal() {
    this.orderS.checkoutModalOpen = false

  }

  toggleConfirmCancel() {
    this.showConfirmCancel = true
  }

  submitOrder(email: string) {
    this.closeCheckoutModal()
    
    this.orderS.submitOrder({...this.cartS.cart, total: this.orderS.orderTotal as number}, email)
  }

  confirmCancel() {
    this.cartS.clearCart()
    this.orderS.orderTotal = 0
    this.closeCheckoutModal()
  }

}
