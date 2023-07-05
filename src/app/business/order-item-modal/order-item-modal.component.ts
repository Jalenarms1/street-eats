import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BusinessService } from 'src/app/services/business.service';
import { CartService } from 'src/app/services/cart.service';
import { OrderItemService } from 'src/app/services/order-item.service';
import { FoodItem } from 'src/models/FoodItem';
import { OrderItemTopping } from 'src/models/OrderItemTopping';
import { Topping } from 'src/models/Topping';

import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-order-item-modal',
  templateUrl: './order-item-modal.component.html',
  styleUrls: ['./order-item-modal.component.css']
})
export class OrderItemModalComponent implements OnInit {
  @Input() orderItemModalOpen!: boolean
  @Input() selectedFoodItem!: FoodItem
  @Output() toggleModal = new EventEmitter<void>()
  showAddToCartWarning: boolean = false
  selectedToppings: Topping[] = []
  onSideToppings: string[] = [] 
  showToppingOptTo: string[] = []
  itemQuantity: number = 1
  constructor(public orderItemS: OrderItemService, public businessServ: BusinessService, private cartS: CartService) {
    this.orderItemS.orderItem.toppings = [];
    this.orderItemS.orderItem.total = this.orderItemS.selectedItem.price
    this.orderItemS.orderItem.foodItemId = this.orderItemS.selectedItem.id
    this.orderItemS.orderItem.foodItem = this.orderItemS.selectedItem
    this.orderItemS.orderItem.quantity = 1
    this.orderItemS.orderItem.specialInstruction = ''


  }

  ngOnInit(): void {
  }

  closeModal() {
    const modal = document.getElementById("order-item-modal")
    modal?.classList.remove("fade-in")
    modal?.classList.add("fade-out")
    setTimeout(() => {
      // this.toggleModal.emit()
      this.orderItemS.closeModal()

    }, 1000)
  }

  onSideOptToggle(toppingId: string, val: string) {
    if (val == 'Y' && !this.onSideToppings.includes(toppingId)) {
      this.onSideToppings.push(toppingId)
    } else if (val == 'N') {
      this.onSideToppings = this.onSideToppings.filter(item => item != toppingId)
    }

    console.log(this.onSideToppings);
    
    
  }

  onToppingSelect(topping: Topping) {
    if (this.selectedToppings.filter(item => item.id == topping.id).length < 1){
      this.showToppingOptTo.push(topping.id)
      this.onSideToppings.push(topping.id)

      this.selectedToppings.push(topping)
      this.orderItemS.orderItem.total += topping.price
      // this.orderItemS.orderItemToppings.push({id: uuidv4(), onSide})
    } else {
      this.showToppingOptTo = this.showToppingOptTo.filter((item) => item != topping.id)
      this.onSideToppings = this.onSideToppings.filter((item) => item != topping.id)
      this.selectedToppings = this.selectedToppings.filter(item => item.id != topping.id)
      this.orderItemS.orderItem.total -= topping.price
    }
  }

  addOrderItemToCart = () => {
    console.log(this.cartS.cart.businessId);
    console.log(this.businessServ.currBusiness.id);
    console.log(this.cartS.cart.businessId.trim() != '');
    console.log(this.cartS.cart);
    
    if(this.cartS.cart.businessId != '' && this.cartS.cart.businessId != this.businessServ.currBusiness.id) {
      this.showAddToCartWarning = true
      return
    } else {
      this.showAddToCartWarning = false
      this.selectedToppings.forEach(item => {
        const orderItemTopping: OrderItemTopping = {
          topping: item,
          toppingId: item.id,
          onSide: this.onSideToppings.includes(item.id),
  
        }
  
        this.orderItemS.orderItem.toppings.push(orderItemTopping)
      })
      
      this.cartS.addToCart(this.orderItemS.orderItem, this.businessServ.currBusiness.id,this.businessServ.currBusiness.name )
      
      
      this.closeModal()
    }
  }

  closeOrConfirmWarning(confirm: boolean = false) {
    this.showAddToCartWarning = false
    if (confirm) {
      this.cartS.clearCart()
      this.addOrderItemToCart()
    }
  }

  adjItemQuantity(incrementBy: number) {
    if(this.orderItemS.orderItem.quantity == 1 && incrementBy == -1) return
    
    this.orderItemS.orderItem.quantity = this.orderItemS.orderItem.quantity + incrementBy
    
    this.orderItemS.orderItem.total = (this.selectedToppings.reduce((acc, obj) => acc += obj.price, 0) + this.orderItemS.orderItem.foodItem.price) * this.orderItemS.orderItem.quantity

    // const quanXItemPrice = this.orderItemS.orderItem.quantity * this.orderItemS.orderItem.foodItem.price
    // console.log(quanXItemPrice);
    // console.log(this.orderItemS.orderItem.total);
    
    
    
    // this.orderItemS.orderItem.total = this.selectedToppings.reduce((acc, obj) => acc += obj.price, 0) + quanXItemPrice
  }

}
