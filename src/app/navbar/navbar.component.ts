import { Component, OnInit } from '@angular/core';
import { LoginModalService } from '../login-modal.service';
import { JwtService } from '../jwt.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public modalService: LoginModalService, public jwt: JwtService) { }

  ngOnInit(): void {
  }

}
