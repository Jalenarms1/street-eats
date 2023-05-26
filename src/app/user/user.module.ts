import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { UserPageComponent } from './user-page/user-page.component';



@NgModule({
  declarations: [
    UserPageComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class UserModule { }
