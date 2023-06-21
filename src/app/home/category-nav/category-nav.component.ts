import { Component, OnInit } from '@angular/core';
import { BusinessService } from 'src/app/services/business.service';
import { Category } from 'src/models/Categories';

@Component({
  selector: 'app-category-nav',
  templateUrl: './category-nav.component.html',
  styleUrls: ['./category-nav.component.css']
})
export class CategoryNavComponent implements OnInit {
  categories: Category[] = [
    {
      category: 'Any',
      icon: 'https://cdn-icons-png.flaticon.com/512/1404/1404945.png',
      active: true
    },
    {
      category: 'Mexican',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ5zrF6ZPdAGrQ7F-ZVyEcJJpwDYQVtad_hA&usqp=CAU" alt="italian-food-icon',
      active: false
    },
    {
      category: 'Italian',
      icon: 'https://www.pngitem.com/pimgs/m/63-638388_pizza-food-italian-pepperoni-icon-mozzarella-restaurant-hd.png',
      active: false
    },
    {
      category: 'Asian',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-4gaNQ56bMXLtHKU6JV8DNT5bBGMWPGNKwKIDsvd7Rym5Z9c1S1bJ6NPx8Vy6dzYI88A&usqp=CAU',
      active: false
    },
    {
      category: 'American',
      icon: 'https://us.123rf.com/450wm/kharlamovainna/kharlamovainna2008/kharlamovainna200800094/168821759-hamburger-icon.jpg?ver=6',
      active: false
    },
    {
      category: 'Vegetarian',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS1n2yfTKEgXnkJbxk6hauWrP_Cl2KKAQKOQ&usqp=CAU',
      active: false
    },

  ]

  constructor(private businessServ: BusinessService) { }

  ngOnInit(): void {
  }

  setActive(category: string) {
    this.categories.forEach(item => {
      if (item.category == category) {
        this.businessServ.filterBusinesses(category)
        item.active = true
      } else {
        item.active = false
      }
    })
  }

}
