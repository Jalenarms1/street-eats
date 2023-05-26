import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartParentComponent } from './cart-parent/cart-parent.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    CartParentComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [MatIconModule]
})
export class CartModule { }
