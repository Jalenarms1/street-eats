import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CategoryNavComponent } from '../home/category-nav/category-nav.component';
import { HomeParentComponent } from './home-parent/home-parent.component';
import { LoginPromptComponent } from './login-prompt/login-prompt.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { RecentlyViewedComponent } from './recently-viewed/recently-viewed.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MapModalComponent } from './map-modal/map-modal.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CategoryNavComponent,
    HomeParentComponent,
    ShopListComponent,
    RecentlyViewedComponent,
    
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    BrowserModule,
    RouterModule
  ],
  exports:[MatIconModule],
})
export class HomeModule { }
