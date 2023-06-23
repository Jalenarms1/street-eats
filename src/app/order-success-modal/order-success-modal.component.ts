import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order-success-modal',
  templateUrl: './order-success-modal.component.html',
  styleUrls: ['./order-success-modal.component.css']
})
export class OrderSuccessModalComponent implements OnInit {

  constructor(private orderS: OrderService) { }

  ngOnInit(): void {
    if(this.orderS.orderSuccessModalOpen) {
      setTimeout(() => {
        this.orderS.orderSuccessModalOpen = false
  
      }, 3000)

    }

  }

  closeModal() {
    this.orderS.orderSuccessModalOpen = false
  }

}
