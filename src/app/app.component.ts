import { Component } from '@angular/core';
import { LoginModalService } from './login-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public modalService: LoginModalService) {}
}
