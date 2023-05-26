import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BusinessService } from 'src/app/business.service';
import { JwtService } from 'src/app/jwt.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-home-parent',
  templateUrl: './home-parent.component.html',
  styleUrls: ['./home-parent.component.css']
})
export class HomeParentComponent implements OnInit {
  constructor(private userServ: UserService, public jwt: JwtService, public businessServ: BusinessService) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.businessServ.getBuinesses()
    
  }

  

}
