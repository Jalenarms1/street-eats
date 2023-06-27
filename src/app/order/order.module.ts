import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderParentComponent } from './order-parent/order-parent.component';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    OrderParentComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  providers: [DatePipe]
})
export class OrderModule { }
