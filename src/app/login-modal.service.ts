import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginModalService {
  showModal: boolean = false
  constructor() { }

  toggleModal() {
    this.showModal = !this.showModal
  }
}
