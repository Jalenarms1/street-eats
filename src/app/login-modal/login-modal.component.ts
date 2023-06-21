import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginModalService } from '../services/login-modal.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { UserService } from '../services/user.service';
import { User } from 'src/models/User';
import { JwtService } from '../services/jwt.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css'],
  
})
export class LoginModalComponent implements OnInit {
  emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  passwordConfirmed: boolean = false
  confirmedPassword: string = ''
  // Sign up
  userInput: User = {} as User
  // Login
  userLogin: User = {} as User
  validationError: boolean = false
  constructor(public modalService: LoginModalService, public userS: UserService, private jwt: JwtService, private router: Router) { }

  ngOnInit(): void {
  }

  checkPasswords(){
    
    
    if (this.confirmedPassword != this.userInput.password){
      this.passwordConfirmed = false
    } else {
      this.passwordConfirmed = true
    }
  }

  closeModal() {
    
    const modal = document.getElementById('modal');
    modal?.classList.remove('modal');
    modal?.classList.add('close-modal');
    setTimeout(() => {
      this.modalService.showModal = false;
      modal?.classList.remove('close-modal');
    }, 500);
    
  }

  login(){
    this.userS.login(this.userLogin.email, this.userLogin.password as string).subscribe(res => {
      console.log(res);
      this.jwt.saveToken(res.token)
      this.userLogin = {} as User
      
    })
    setTimeout(() => {
      this.userS.getMe()

    }, 1000)
    this.closeModal()
    this.validationError = false
  }

  signUp() {
    if(this.passwordConfirmed){
      if(this.emailRegex.test(this.userInput.email)) {
        this.validationError = false
        this.userS.signUp(this.userInput.email, this.userInput.password as string).subscribe(res => {
          console.log(res);
          this.jwt.saveToken(res.token)
          this.userInput = {} as User
          
        })
        setTimeout(() => {
          this.userS.getMe()

        }, 1000)
        this.closeModal()

      } else {
        this.validationError = true
      }
      
      

    }
  }

}
