import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusinessService } from 'src/app/business.service';
import { Business } from 'src/models/Business';
import { FoodItem } from 'src/models/FoodItem';

@Component({
  selector: 'app-business-parent',
  templateUrl: './business-parent.component.html',
  styleUrls: ['./business-parent.component.css']
})
export class BusinessParentComponent implements OnInit {
  businessId: string = ''
  currBusiness: Business = {} as Business
  showEntrees = true;
  showSides = true;
  showDrinks = true;
  

  constructor(private route: ActivatedRoute, public businessServ: BusinessService) {
    
  }
  
  ngOnInit(): void {
    this.businessId = this.route.snapshot.paramMap.get('id') as string
    this.businessServ.getBusiness(this.businessId) 
    window.scrollTo(0,0)   
  }
  
  toggleTab(tab: string) {
    switch(tab) {
      case 'entrees':
        this.showEntrees = !this.showEntrees;
        break
      case 'sides':
        this.showSides = !this.showSides;
        break
      case 'drinks':
        this.showDrinks = !this.showDrinks;
        break

    }
    
  }

  filteredFoodTypeArr(foodItems: FoodItem[], type: string) {
    let filteredArr: FoodItem[] = []

    filteredArr = foodItems?.filter(item => item.type == type)

    return filteredArr

  }

  


}
