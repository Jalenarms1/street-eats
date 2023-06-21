import { Component, OnInit } from '@angular/core';
import { LoginModalService } from '../services/login-modal.service';
import { JwtService } from '../services/jwt.service';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public modalService: LoginModalService, public jwt: JwtService, private router: Router, public cartS: CartService) { }

  ngOnInit(): void {

  }

  

}
