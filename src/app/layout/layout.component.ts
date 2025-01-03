import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { CookieConsentComponent } from '../components/cookie-consent/cookie-consent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    CookieConsentComponent
  ],
  template: `
    <app-header />
    <main>
      <router-outlet />
    </main>
    <app-cookie-consent />
    <app-footer />
  `
})
export class LayoutComponent {}