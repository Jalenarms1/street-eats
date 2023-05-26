import { Component } from '@angular/core';
import { LoginModalService } from './login-modal.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { JwtService } from './jwt.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  constructor(public modalService: LoginModalService, public jwt: JwtService, private user: UserService) {
    this.user.getMe()
  }
}
