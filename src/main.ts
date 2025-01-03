import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withHashLocation } from '@angular/router';
import { LayoutComponent } from './app/layout/layout.component';
import { routes } from './app/app.routes';

bootstrapApplication(LayoutComponent, {
  providers: [
    provideRouter(routes, withHashLocation())
  ]
}).catch(err => console.error(err));