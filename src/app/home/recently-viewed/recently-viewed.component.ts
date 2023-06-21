import { Component, OnInit } from '@angular/core';
import { MapModalService } from 'src/app/services/map-modal.service';
import { Business } from 'src/models/Business';

@Component({
  selector: 'app-recently-viewed',
  templateUrl: './recently-viewed.component.html',
  styleUrls: ['./recently-viewed.component.css']
})
export class RecentlyViewedComponent implements OnInit {

  recentlyViewed: Business[] = []

  constructor(public mapModalS: MapModalService) { }

  ngOnInit(): void {
    const savedRv = JSON.parse(localStorage.getItem("RV_StreetEats") as string)

    this.recentlyViewed = savedRv ?? []
  }

}
