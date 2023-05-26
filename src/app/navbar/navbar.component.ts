import { Component, OnInit } from '@angular/core';
import { LoginModalService } from '../login-modal.service';
import { JwtService } from '../jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public modalService: LoginModalService, public jwt: JwtService, private router: Router) { }

  ngOnInit(): void {

  }

  

}
