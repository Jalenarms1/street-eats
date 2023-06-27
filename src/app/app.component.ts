import { Component } from '@angular/core';
import { LoginModalService } from './services/login-modal.service';
import { JwtService } from './services/jwt.service';
import { UserService } from './services/user.service';
import { OrderItemService } from './services/order-item.service';
import { BusinessService } from './services/business.service';
import { OrderService } from './services/order.service';
import { MapModalService } from './services/map-modal.service';
import { ShopSearchService } from './services/shop-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  constructor(public modalService: LoginModalService, public jwt: JwtService, private user: UserService, public orderItemS: OrderItemService, private businessServ: BusinessService, public orderS: OrderService, public mapModalS: MapModalService, public searchS: ShopSearchService) {
    this.user.getMe()
    this.businessServ.getBuinesses()
    this.orderS.getMyOrders()
    
  }
}
