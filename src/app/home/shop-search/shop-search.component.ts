import { Component, OnInit } from '@angular/core';
import { ShopSearchService } from 'src/app/services/shop-search.service';

@Component({
  selector: 'app-shop-search',
  templateUrl: './shop-search.component.html',
  styleUrls: ['./shop-search.component.css']
})
export class ShopSearchComponent implements OnInit {
  openModal: boolean = false
  constructor(public searchS: ShopSearchService) { }

  ngOnInit(): void {
  }

  onSearchInput(event: Event) {
    const inputEvent = event?.target as HTMLInputElement

    this.openModal = inputEvent.value.length >= 2;
    if (this.openModal) {
      this.searchS.searchModalOpen = true
    }
  }

}
