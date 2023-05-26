import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderParentComponent } from './order-parent/order-parent.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    OrderParentComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class OrderModule { }
