import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-security',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="seguridad" class="py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12">Seguridad y Confianza</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold mb-4">Protección de Datos</h3>
            <ul class="space-y-2">
              <li>✓ Cumplimiento total con GDPR</li>
              <li>✓ Encriptación de datos de usuario</li>
              <li>✓ Autenticación de dos factores</li>
            </ul>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold mb-4">Seguridad de Fondos</h3>
            <ul class="space-y-2">
              <li>✓ Almacenamiento en cold wallets</li>
              <li>✓ Monitoreo 24/7</li>
              <li>✓ Seguros contra pérdidas</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `
})
export class SecurityComponent {}