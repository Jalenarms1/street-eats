import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {
  gmApiKey: string = environment.gmApiKey

  constructor(private sanitizer: DomSanitizer) { }

  sanitizeUrl(addr: string) {
    console.log(addr);
    
    const url = `https://www.google.com/maps/embed/v1/place?key=${this.gmApiKey}&q=${addr}`
    const sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);

    return sanitizedUrl

  }
}
