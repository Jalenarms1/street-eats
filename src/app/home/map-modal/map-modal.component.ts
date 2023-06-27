import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HelpersService } from 'src/app/services/helpers.service';
// import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MapModalService } from 'src/app/services/map-modal.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.component.html',
  styleUrls: ['./map-modal.component.css']
})
export class MapModalComponent implements OnInit {
  // @Input() addr: string = ''
  @Output() toggleModal = new EventEmitter<void>()

  constructor( public mapModalS: MapModalService, public helpers: HelpersService) { }

  ngOnInit(): void {
  }


  

  closeModal() {
    const modal = document.getElementById("map-modal")
    modal?.classList.remove("fade-in")
    modal?.classList.add("fade-out")
    setTimeout(() => {
      this.mapModalS.closeMapModal()

    }, 1000)
  }
}
