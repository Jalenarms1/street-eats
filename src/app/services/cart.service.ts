import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cart } from 'src/models/Cart';
import { OrderItem } from 'src/models/OrderItem';
import { OrderItemTopping } from 'src/models/OrderItemTopping';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartKey: string = environment.cartToken
  cart: Cart = {orderItems: [], total: 0, businessId: '', businessName: ''} 
  constructor() {
    this.setCart(this.getLSCart() ?? this.cart)
  }

  
  getLSCart() {
    return JSON.parse(localStorage.getItem(this.cartKey) as string) 
  }

  setCart(cart: Cart) {
    this.cart = cart
    localStorage.setItem(this.cartKey, JSON.stringify(cart))
  }
  
  
  addToCart(orderItem: OrderItem, businessId: string, businessName: string) {
    
    
    let cart: Cart = this.getLSCart()
    if(!cart) {
      cart = {
        businessId,
        orderItems: [orderItem],
        total: parseFloat(orderItem.total.toFixed(2)),
        businessName
        
      }
    } else {
      cart.orderItems.push(orderItem)
      cart.businessId = businessId
      cart.businessName = businessName
      cart.total = parseFloat(cart.orderItems.reduce(((acc, currObj) => acc += currObj.total), 0).toFixed(2))
    }
    
    console.log(cart.orderItems);
    
    this.setCart(cart)
    
  }

  removeFromCart(index: number) {
    this.cart.orderItems = this.cart.orderItems.filter((item, i) => i != index)
    this.cart.total = this.cart.orderItems.reduce(((acc, currObj) => acc += currObj.total), 0)
    if (this.cart.orderItems.length == 0) this.cart.businessId = ''
    this.setCart(this.cart)
  }

  getCartTotal() {
    return this.cart.total
  }

  clearCart() {
    localStorage.removeItem(this.cartKey)
    this.cart = {orderItems: [], total: 0, businessId: '', businessName: ''}
    this.setCart(this.cart)

  }

  updQuantity(incrementBy: number, index: number) {
    if (this.cart.orderItems[index].quantity == 1 && incrementBy == -1) return
    this.cart.orderItems[index].quantity += incrementBy
    this.cart.orderItems[index].total = (this.cart.orderItems[index].foodItem.price + this.cart.orderItems[index].toppings.reduce((acc, obj) => acc += obj.topping?.price as number, 0)) * this.cart.orderItems[index].quantity

    this.cart.total = parseFloat(this.cart.orderItems.reduce((acc, obj) => acc += obj.total, 0).toFixed(2))
    this.setCart(this.cart)
  }

  
}
