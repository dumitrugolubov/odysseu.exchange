import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cookie-consent',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div *ngIf="showConsent" 
         class="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <div class="container mx-auto flex justify-between items-center">
        <p>
          Utilizamos cookies para mejorar tu experiencia. Al continuar navegando, 
          aceptas nuestra <a [routerLink]="['/privacy']" class="underline">política de privacidad</a>.
        </p>
        <button (click)="acceptCookies()" 
                class="bg-yellow-500 text-black px-4 py-2 rounded-lg ml-4">
          Aceptar
        </button>
      </div>
    </div>
  `
})
export class CookieConsentComponent implements OnInit {
  showConsent = true;

  ngOnInit() {
    this.showConsent = !localStorage.getItem('cookiesAccepted');
  }

  acceptCookies() {
    this.showConsent = false;
    localStorage.setItem('cookiesAccepted', 'true');
  }
}