import { Component, OnInit, Input } from '@angular/core';
import { BusinessService } from 'src/app/services/business.service';
import { OrderItemService } from 'src/app/services/order-item.service';
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
  constructor(public businessServ: BusinessService, public orderItemS: OrderItemService) { }

  ngOnInit(): void {
  }

  onFoodItemSelect(foodItem: FoodItem) {
    this.orderItemS.toggleModal()
    this.orderItemS.setSelectedItem(foodItem)
    
  }

  // toggleModal() {
  //   this.orderItemModalOpen = !this.orderItemModalOpen
  // }
  

}
