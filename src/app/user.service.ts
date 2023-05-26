import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthUserResponse, User } from 'src/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User = {} as User


  constructor(private http: HttpClient) { }

  signUp(email: string, password: string){
    return this.http.post<AuthUserResponse>(`${environment.apiUrl}/api/user/new`, {email, password})
  }

  login(email: string, password: string){
    return this.http.post<AuthUserResponse>(`${environment.apiUrl}/api/user/auth`, {email, password})

  }

  getMe(){
    this.http.get<User>(`${environment.apiUrl}/api/user`).subscribe(res => {
      this.user = res
      
    })
  }


}
