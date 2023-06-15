import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartParentComponent } from './cart-parent/cart-parent.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CartParentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    BrowserModule,
    RouterModule
  ],
  exports: [MatIconModule]
})
export class CartModule { }
