import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { SecurityComponent } from '../../components/security/security.component';
import { TutorialComponent } from '../../components/tutorial/tutorial.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, FeaturesComponent, SecurityComponent, TutorialComponent],
  template: `
    <app-hero />
    <app-features />
    <app-security />
    <app-tutorial />
  `
})
export class HomeComponent {}