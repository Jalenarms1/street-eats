import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusinessService } from 'src/app/services/business.service';
import { HelpersService } from 'src/app/services/helpers.service';
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
  

  constructor(private route: ActivatedRoute, public businessServ: BusinessService, public helpers: HelpersService) {
    
  }
  
  ngOnInit(): void {
    this.businessId = this.route.snapshot.paramMap.get('id') as string
    this.businessServ.getBusiness(this.businessId) 
    window.scrollTo(0,0)   

  }

 
  
  toggleTab(tab: string) {
    const tabEle = document.getElementById(`tab-${tab}`)
    console.log(`tab-${tab.toLowerCase()}`);
    console.log(tabEle);
    

    if(tabEle?.classList.contains("slide-open")) {
      tabEle?.classList.remove("slide-open")
      tabEle?.classList.add("slide-close")
    } else {
      tabEle?.classList.remove("slide-close")
      tabEle?.classList.add("slide-open")
    }
    switch(tab) {
      case 'entree':
        
        this.showEntrees = !this.showEntrees;
        break
      case 'side':
        this.showSides = !this.showSides;
        break
      case 'drink':
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
