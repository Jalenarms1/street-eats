import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/jwt.service';
import { LoginModalService } from 'src/app/login-modal.service';

@Component({
  selector: 'app-order-parent',
  templateUrl: './order-parent.component.html',
  styleUrls: ['./order-parent.component.css']
})
export class OrderParentComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit(): void {
  }

}
