import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="min-h-screen bg-white py-16">
      <div class="container mx-auto px-4 max-w-2xl">
        <h1 class="text-4xl font-bold mb-8">Contacto</h1>
        <form class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700">Nombre</label>
            <input type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Mensaje</label>
            <textarea rows="4" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"></textarea>
          </div>
          <button type="submit" class="bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-400">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  `
})
export class ContactComponent {}