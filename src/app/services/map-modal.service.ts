import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapModalService {
  showMap: boolean = false
  selectedAddr: string = ''
  constructor() { }

  openModal(addr:string) {
    this.selectedAddr = addr
    this.showMap = true
  }

  closeMapModal() {
    this.showMap = false
  }
}
