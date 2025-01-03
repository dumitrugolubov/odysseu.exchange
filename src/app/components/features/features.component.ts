import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="caracteristicas" class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12">Características Principales</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center p-6 rounded-lg shadow-lg">
            <div class="text-3xl font-bold text-yellow-500 mb-4">0%</div>
            <h3 class="text-xl font-semibold mb-2">Comisión Spot</h3>
            <p>Opera sin comisiones en todos los pares de trading spot</p>
          </div>
          <div class="text-center p-6 rounded-lg shadow-lg">
            <div class="text-3xl font-bold text-yellow-500 mb-4">10%</div>
            <h3 class="text-xl font-semibold mb-2">Retorno por Liquidaciones</h3>
            <p>Obtén beneficios adicionales de las liquidaciones del mercado</p>
          </div>
          <div class="text-center p-6 rounded-lg shadow-lg">
            <div class="text-3xl font-bold text-yellow-500 mb-4">777x</div>
            <h3 class="text-xl font-semibold mb-2">Apalancamiento</h3>
            <p>Maximiza tu potencial con nuestro apalancamiento único</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class FeaturesComponent {}