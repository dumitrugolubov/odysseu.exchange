import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-white py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold mb-8">Política de Privacidad</h1>
        <div class="prose max-w-none">
          <p class="text-lg mb-6">
            En Odyssey Exchange, nos tomamos muy en serio la privacidad de nuestros usuarios.
            Esta política describe cómo recopilamos, usamos y protegemos su información.
          </p>
        </div>
      </div>
    </div>
  `
})
export class PrivacyComponent {}