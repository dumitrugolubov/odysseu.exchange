import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-white py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold mb-8">Términos de Uso</h1>
        <div class="prose max-w-none">
          <p class="text-lg mb-6">
            Al utilizar Odyssey Exchange, aceptas cumplir con nuestros términos y condiciones.
            Por favor, lee detenidamente este documento.
          </p>
        </div>
      </div>
    </div>
  `
})
export class TermsComponent {}