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
  cart: Cart = {orderItems: [], total: 0, businessId: ''} as Cart
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
  
  
  addToCart(orderItem: OrderItem, businessId: string) {
    
    
    let cart: Cart = this.getLSCart()
    if(!cart) {
      cart = {
        businessId: businessId,
        orderItems: [orderItem],
        total: parseFloat(orderItem.total.toFixed(2))
        
      }
    } else {
      // cart.orderItems = [...cart.orderItems, orderItem]
      cart.orderItems.push(orderItem)
      cart.businessId = businessId
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
    this.cart = {orderItems: [], total: 0, businessId: ''}
    this.setCart(this.cart)

  }

  updQuantity(incrementBy: number, index: number) {
    if (this.cart.orderItems[index].quantity == 1 && incrementBy == -1) return
    this.cart.orderItems[index].quantity += incrementBy
    if (incrementBy == 1) {
      this.cart.orderItems[index].total += this.cart.orderItems[index].foodItem.price
    } else if(incrementBy == -1) {
      this.cart.orderItems[index].total -= this.cart.orderItems[index].foodItem.price
    }

    this.cart.total = parseFloat(this.cart.orderItems.reduce((acc, obj) => acc += obj.total, 0).toFixed(2))
  }

  
}
