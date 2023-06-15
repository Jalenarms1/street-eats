import { Component, OnInit } from '@angular/core';
import { BusinessService } from 'src/app/business.service';
import { Business } from 'src/models/Business';


@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {
  businesses: Business[] = []
  modalOpen: boolean = false
  selectedAddr: string = ''

  constructor(public businessServ: BusinessService) { }

  ngOnInit(): void {
    
  }

  

  toggleModal(addr: string | null = null) {
    this.selectedAddr = addr as string
    this.modalOpen = !this.modalOpen

    
  }

}
