import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeHeadingComponent } from './home-heading/home-heading.component';
import { CategoryNavComponent } from '../home/category-nav/category-nav.component';
import { HomeParentComponent } from './home-parent/home-parent.component';
import { LoginPromptComponent } from './login-prompt/login-prompt.component';
import { ShopListComponent } from './shop-list/shop-list.component';


@NgModule({
  declarations: [
    HomeHeadingComponent,
    CategoryNavComponent,
    HomeParentComponent,
    LoginPromptComponent,
    ShopListComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[MatIconModule],
})
export class HomeModule { }
