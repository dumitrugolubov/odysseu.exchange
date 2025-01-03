import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-gradient-to-r from-black to-gray-900 text-white py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-5xl font-bold mb-6">
            La Primera Plataforma de Intercambio de Memecoins
          </h1>
          <p class="text-xl mb-8">
            Descubre el poder del trading con 0% de comisión spot, 
            10% de retorno por liquidaciones y apalancamiento único de 777x
          </p>
          <a href="https://ody.lol" 
             class="bg-yellow-500 text-black px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-400 inline-block">
            ¡Comienza a Tradear Ahora!
          </a>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {}