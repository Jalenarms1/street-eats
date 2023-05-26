import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/jwt.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  constructor(private jwt: JwtService, public user: UserService) { }

  ngOnInit(): void {
    
    
  }

  logout(){
    this.jwt.destroyToken()
  }

}