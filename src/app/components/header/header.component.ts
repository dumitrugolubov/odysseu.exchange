import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="bg-black text-white p-4">
      <nav class="container mx-auto flex justify-between items-center">
        <a [routerLink]="['/']" class="text-2xl font-bold">Odyssey Exchange</a>
        <div class="flex gap-6">
          <a [routerLink]="['/']" fragment="caracteristicas" class="hover:text-gray-300">Características</a>
          <a [routerLink]="['/']" fragment="seguridad" class="hover:text-gray-300">Seguridad</a>
          <a [routerLink]="['/']" fragment="tutorial" class="hover:text-gray-300">Tutorial</a>
          <a href="https://ody.lol" 
             class="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400">
            Comerciar Ahora
          </a>
        </div>
      </nav>
    </header>
  `
})
export class HeaderComponent {}