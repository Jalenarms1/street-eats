import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopSearchService {
  searchText: string = ''
  searchModalOpen: boolean = false
  constructor() { }
}
