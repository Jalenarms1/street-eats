import { Injectable } from '@angular/core';
import { CartService } from './cart.service';
import { OrderItem } from 'src/models/OrderItem';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BusinessService } from './business.service';
import { Order } from 'src/models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  checkoutModalOpen: boolean = false
  orderTotal!: string | number 
  orderSuccessModalOpen: boolean = false
  orderErrorModalOpen: boolean = false
  currUserOrders: Order[] = []
  constructor(private cartS: CartService, private http: HttpClient, private businessS: BusinessService) { 
    this.orderTotal = (this.cartS.cart.total + (this.cartS.cart.total * .088)).toFixed(2)
  }

  flashModal(modal: string) {
    if(modal == 'success') {
      this.orderSuccessModalOpen = true
      
    }
  }

  submitOrder(cart: {orderItems: OrderItem[], businessId: string, total: number}, email: string) {
    console.log(cart);
    const cartBusiness = this.businessS.businesses.find(b => b.id == cart.businessId)
    const businessName = cartBusiness?.name
    const businessAddress = cartBusiness?.address
    
    this.http.post(`${environment.apiUrl}/api/order`, {...cart, emailAddress: email, businessName, businessAddress}).subscribe(res => {
      console.log(res);
      
    })
  }

  getMyOrders() {
    this.http.get(`${environment.apiUrl}/api/order/my-orders`).subscribe((res) => {
      this.currUserOrders = res as Order[]
      console.log(this.currUserOrders);
      
    })
  }


}
