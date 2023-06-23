import { Component, OnInit, Input } from '@angular/core';
import { BusinessService } from 'src/app/services/business.service';
import { OrderItemService } from 'src/app/services/order-item.service';
import { OrderService } from 'src/app/services/order.service';
import { FoodItem } from 'src/models/FoodItem';

@Component({
  selector: 'app-food-items',
  templateUrl: './food-items.component.html',
  styleUrls: ['./food-items.component.css']
})
export class FoodItemsComponent implements OnInit {
  @Input() filteredFoodTypeArr!: (arr: FoodItem[], type: string) => FoodItem[]

  @Input() type!: string

  orderItemModalOpen = false;

  selectedFoodItem: FoodItem = {} as FoodItem
  constructor(public businessServ: BusinessService, public orderItemS: OrderItemService, public orderS: OrderService) { }

  ngOnInit(): void {
    
  }

  onFoodItemSelect(foodItem: FoodItem) {
    console.log(this.orderS.orderSuccessModalOpen)
    this.orderItemS.toggleModal()
    this.orderItemS.setSelectedItem(foodItem)
    
  }

  lowerCase(word: string) {
    return word.toLowerCase()
  }

  // toggleModal() {
  //   this.orderItemModalOpen = !this.orderItemModalOpen
  // }
  

}
