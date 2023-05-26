import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Business } from 'src/models/Business';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  businesses: Business[] = []

  constructor(private http: HttpClient) { }


  getBuinesses() {
    this.http.get<Business[]>(`${environment.apiUrl}/api/business`).subscribe((res: Business[]) => {
      console.log(res);
      
      this.businesses = res
    })
  }

}
