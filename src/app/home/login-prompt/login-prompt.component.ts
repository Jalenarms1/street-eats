import { Component, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';
import { LoginModalService } from 'src/app/services/login-modal.service';

@Component({
  selector: 'app-login-prompt',
  templateUrl: './login-prompt.component.html',
  styleUrls: ['./login-prompt.component.css']
})
export class LoginPromptComponent implements OnInit {
  openLoginPrompt: boolean = false
  constructor(private modalService: LoginModalService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.openLoginPrompt = true
      // window.scroll(0,0)
      
    }, 1000)
  }

  openModal() {
    
    this.openLoginPrompt = false

    this.modalService.toggleModal()
  }

  closeLoginPrompt() {

    this.openLoginPrompt = false



  }

}
