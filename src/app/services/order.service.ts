import { Injectable } from '@angular/core';
import { CartService } from './cart.service';
import { OrderItem } from 'src/models/OrderItem';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  checkoutModalOpen: boolean = false
  orderTotal!: string | number 
  constructor(private cartS: CartService, private http: HttpClient) { 
    this.orderTotal = (this.cartS.cart.total + (this.cartS.cart.total * .088)).toFixed(2)
  }

  submitOrder(cart: {orderItems: OrderItem[], businessId: string, total: number}) {
    this.http.post(`${environment.apiUrl}/api/order`, {...cart}).subscribe(res => {
      console.log(res);
      
    })
  }


}
