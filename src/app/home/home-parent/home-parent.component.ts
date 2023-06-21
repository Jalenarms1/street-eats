import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BusinessService } from 'src/app/services/business.service';
import { JwtService } from 'src/app/services/jwt.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home-parent',
  templateUrl: './home-parent.component.html',
  styleUrls: ['./home-parent.component.css']
})
export class HomeParentComponent implements OnInit {
  constructor(private userServ: UserService, public jwt: JwtService, public businessServ: BusinessService) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    
    
  }

  

}
