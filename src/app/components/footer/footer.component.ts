import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="bg-black text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4">Odyssey Exchange</h3>
            <p class="text-gray-400">La primera plataforma de intercambio de memecoins</p>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul class="space-y-2">
              <li><a [routerLink]="['/about']" class="text-gray-400 hover:text-white">Sobre Nosotros</a></li>
              <li><a [routerLink]="['/terms']" class="text-gray-400 hover:text-white">Términos de Uso</a></li>
              <li><a [routerLink]="['/privacy']" class="text-gray-400 hover:text-white">Política de Privacidad</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Soporte</h4>
            <ul class="space-y-2">
              <li><a [routerLink]="['/faq']" class="text-gray-400 hover:text-white">FAQ</a></li>
              <li><a [routerLink]="['/contact']" class="text-gray-400 hover:text-white">Contacto</a></li>
            </ul>
          </div>
          <div class="text-center md:text-right space-y-4">
            <a href="https://ody.lol" 
               class="inline-block bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-400">
              Comerciar Ahora
            </a>
            <a href="https://ody.lol" 
               class="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 w-full">
              Únete a la Comunidad
            </a>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Odyssey Exchange. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}