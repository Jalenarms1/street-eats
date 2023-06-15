import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
  }

  getToken(): string | null {
    return localStorage.getItem(`${environment.token_pre}_token`);
  }

  // save JWT token to local storage
  saveToken(token: string): void {
    localStorage.setItem(`${environment.token_pre}_token`, token);
    this.isAuthenticated$.next(true);
  }

  // remove JWT token from local storage
  destroyToken(): void {
    localStorage.removeItem(`${environment.token_pre}_token`);
    this.isAuthenticated$.next(false);
    this.router.navigateByUrl('/');

  }

  // check if user is authenticated
  isAuthenticated(): boolean {
    const token = this.getToken();
  
    if (token) {
      // check if token is expired
      const decodedToken: any = jwt_decode(token);
      const currentTime = Date.now() / 1000;
      
      return decodedToken.exp > currentTime;
    } else {
      return false;
    }
  }
}
