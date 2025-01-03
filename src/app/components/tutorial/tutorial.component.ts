import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tutorial',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="tutorial" class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12">Cómo Empezar</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center p-6">
            <div class="text-3xl font-bold text-yellow-500 mb-4">1</div>
            <h3 class="text-xl font-semibold mb-2">Regístrate</h3>
            <p>Crea tu cuenta en menos de 2 minutos</p>
          </div>
          <div class="text-center p-6">
            <div class="text-3xl font-bold text-yellow-500 mb-4">2</div>
            <h3 class="text-xl font-semibold mb-2">Deposita</h3>
            <p>Fondea tu cuenta con crypto o fiat</p>
          </div>
          <div class="text-center p-6">
            <div class="text-3xl font-bold text-yellow-500 mb-4">3</div>
            <h3 class="text-xl font-semibold mb-2">Opera</h3>
            <p>Comienza a tradear con 0% de comisión</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class TutorialComponent {}