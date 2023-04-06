import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginModalService } from 'src/app/login-modal.service';

@Component({
  selector: 'app-login-prompt',
  templateUrl: './login-prompt.component.html',
  styleUrls: ['./login-prompt.component.css']
})
export class LoginPromptComponent implements OnInit {
  constructor(private modalService: LoginModalService) { }

  ngOnInit(): void {
  }

  openModal() {
    this.modalService.toggleModal()
  }

}
