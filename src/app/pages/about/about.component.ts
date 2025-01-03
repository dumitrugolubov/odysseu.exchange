import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-white py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold mb-8">Sobre Nosotros</h1>
        <div class="prose max-w-none">
          <p class="text-lg mb-6">
            Odyssey Exchange nació con la visión de revolucionar el trading de memecoins, 
            ofreciendo una plataforma única con características incomparables en el mercado.
          </p>
          <p class="text-lg mb-6">
            Nuestra misión es democratizar el acceso al trading de criptomonedas, 
            eliminando barreras y ofreciendo las mejores condiciones del mercado.
          </p>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {}