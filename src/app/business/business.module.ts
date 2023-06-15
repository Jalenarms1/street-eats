import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessParentComponent } from './business-parent/business-parent.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FoodItemsComponent } from './food-items/food-items.component';



@NgModule({
  declarations: [
    BusinessParentComponent,
    FoodItemsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    BrowserModule,
    RouterModule
  ]
})
export class BusinessModule { }
