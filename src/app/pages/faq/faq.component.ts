import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-white py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold mb-8">Preguntas Frecuentes</h1>
        <div class="space-y-6">
          <div class="border-b pb-4">
            <h3 class="text-xl font-semibold mb-2">¿Cómo empiezo a operar?</h3>
            <p>Simplemente regístrate, verifica tu cuenta y realiza tu primer depósito.</p>
          </div>
          <div class="border-b pb-4">
            <h3 class="text-xl font-semibold mb-2">¿Cuáles son las comisiones?</h3>
            <p>Ofrecemos 0% de comisión en trading spot.</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class FaqComponent {}