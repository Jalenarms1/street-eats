import { Injectable } from '@angular/core';
import { FoodItem } from 'src/models/FoodItem';
import { OrderItem } from 'src/models/OrderItem';
import { OrderItemTopping } from 'src/models/OrderItemTopping';

@Injectable({
  providedIn: 'root'
})
export class OrderItemService {
  orderItemModalOpen: boolean = false
  selectedItem: FoodItem = {} as FoodItem
  orderItem: OrderItem = {} as OrderItem
  orderItemToppings: OrderItemTopping[] = [] 
  constructor() { }

  toggleModal() {
    this.orderItemModalOpen = !this.orderItemModalOpen
  }

  closeModal() {
    this.orderItemModalOpen = false
  }

  setSelectedItem(item: FoodItem) {
    this.selectedItem = item
  }

  getToppingsStr(toppings: OrderItemTopping[]) {
    const toppingNames = toppings.map(item => {
      return `${item.topping?.name} ${item.onSide ? 'On Side' : 'On Top'} ${item.topping?.price != 0 ? `($${item.topping?.price.toFixed(2)})` : ''}`
    })

    return toppingNames.join(", ")
  }

  
}
