import { Component, ElementRef, OnInit } from '@angular/core';
import { BusinessService } from 'src/app/services/business.service';
import { CartService } from 'src/app/services/cart.service';
import { OrderItemService } from 'src/app/services/order-item.service';
import { OrderItemTopping } from 'src/models/OrderItemTopping';

@Component({
  selector: 'app-cart-parent',
  templateUrl: './cart-parent.component.html',
  styleUrls: ['./cart-parent.component.css']
})
export class CartParentComponent implements OnInit {
  businessName!: string 
  constructor(public cartS: CartService, public businessS: BusinessService, public orderItemS: OrderItemService) { }

  ngOnInit(): void { 
    window.scrollTo(0,0);
    console.log(this.cartS.cart.orderItems.length);
    
    setTimeout(() => {
      this.getBusinessName(this.cartS.cart.businessId)
      console.log(this.businessName);
      
    }, 300);
    
  }

  

  getBusinessName(id: string) {
    console.log(this.businessS.businesses);
    
    const business = this.businessS.businesses.find(i => i.id == id)
    console.log(business);
    
    this.businessName = business?.name as string
     
  }

}
