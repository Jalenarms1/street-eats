import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginModalService } from '../login-modal.service';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css'],
  animations: [
    trigger('fadeOut', [
      state('visible', style({
        opacity: 1
      })),
      transition(':leave', [
        animate('0.3s ease-out', style({
          opacity: 0
        }))
      ])
    ])
  ]
})
export class LoginModalComponent implements OnInit {
  constructor(public modalService: LoginModalService) { }

  ngOnInit(): void {
  }

  closeModal() {
    
    const modal = document.getElementById('modal');
    modal?.classList.remove('modal');
    modal?.classList.add('close-modal');
    setTimeout(() => {
      this.modalService.showModal = false;
      modal?.classList.remove('close-modal');
    }, 500);
    
  }

}
