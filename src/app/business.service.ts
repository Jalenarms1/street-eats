import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Business } from 'src/models/Business';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  businesses: Business[] = []
  allBusinesses: Business[] = []
  currBusiness: Business = {} as Business
  constructor(private http: HttpClient) { }


  getBuinesses() {
    this.http.get<Business[]>(`${environment.apiUrl}/api/business`).subscribe((res: Business[]) => {
      console.log(res);
      
      this.allBusinesses = res
      this.businesses = [...this.allBusinesses]
    })

    
  }

  getBusiness(id: string){
    this.http.get(`${environment.apiUrl}/api/business/${id}`).subscribe(res => {
      console.log(res);

      this.currBusiness = res as Business
      
    })

  }

  filterBusinesses(category: string) {
    console.log(category);
    const filteredArr: Business[] = []
    this.allBusinesses.forEach(item => {
      console.log(item);
      
      if (category == 'Any') {
        filteredArr.push(item)

        return 
      }

      if (item.category == category) {
        filteredArr.push(item)

      }

    })
    if(filteredArr.length > 0) {
      this.businesses = [...filteredArr]

    } else {
      this.businesses = [...this.allBusinesses]
    }

    console.log(this.businesses);
    
  }

}
