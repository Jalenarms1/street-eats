import { Component, OnInit, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { ShopSearchService } from '../services/shop-search.service';
import { Business } from 'src/models/Business';
import { BusinessService } from '../services/business.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  filteredList: Business[] = []
  constructor(public searchS: ShopSearchService, private elementRef: ElementRef, private businessS: BusinessService, private renderer: Renderer2) { }

  ngOnInit(): void {
    setTimeout(() => {
      const inputEle = this.elementRef.nativeElement.querySelector('#search-modal-text');
      inputEle?.focus();
    });

    this.setFilteredList()

    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }

  ngOnDestroy(): void {
    this.renderer.removeStyle(document.body, 'overflow');
  }

  closeModal() {
    const modal = this.elementRef.nativeElement.querySelector("#search-modal")
    modal.classList.remove("fade-in")
    modal.classList.add("fade-out-search")
    setTimeout(() => {
      this.searchS.searchModalOpen = false

    }, 1000)
    this.searchS.searchText = ''
  }

  setFilteredList() {
    this.filteredList = this.businessS.allBusinesses.filter(b => b.name.toLowerCase().includes(this.searchS.searchText.toLowerCase()))

  }
  

}
