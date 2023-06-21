import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MapModalService } from 'src/app/services/map-modal.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.component.html',
  styleUrls: ['./map-modal.component.css']
})
export class MapModalComponent implements OnInit {
  gmApiKey: string = environment.gmApiKey
  // @Input() addr: string = ''
  @Output() toggleModal = new EventEmitter<void>()

  constructor(private sanitizer: DomSanitizer, public mapModalS: MapModalService) { }

  ngOnInit(): void {
  }


  sanitizeUrl(addr: string) {
    console.log(addr);
    
    const url = `https://www.google.com/maps/embed/v1/place?key=${this.gmApiKey}&q=${addr}`
    const sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);

    return sanitizedUrl

  }

  closeModal() {
    this.mapModalS.closeMapModal()
  }
}
