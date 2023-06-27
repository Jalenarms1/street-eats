import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/services/jwt.service';
import { LoginModalService } from 'src/app/services/login-modal.service';
import { OrderService } from 'src/app/services/order.service';
import { DatePipe } from '@angular/common';
import { MapModalService } from 'src/app/services/map-modal.service';

@Component({
  selector: 'app-order-parent',
  templateUrl: './order-parent.component.html',
  styleUrls: ['./order-parent.component.css']
})
export class OrderParentComponent implements OnInit {

  constructor(public orderS: OrderService, private datePipe: DatePipe, public mapS: MapModalService) {
    
   }

  ngOnInit(): void {
    this.orderS.getMyOrders()
  }

  formatDate(date: Date, getDate = false, getTime = false) {
    if(getDate) {
      const formattedDate = this.datePipe.transform(date, 'MM/dd')
      return formattedDate

    } 
    if(getTime) {
      const formattedDate = this.datePipe.transform(date, 'h:mm a')
      return formattedDate
    }
    return null

  }

}
