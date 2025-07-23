import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { AnimateOnScroll } from 'primeng/animateonscroll';

@Component({
  selector: 'app-about-us-section',
  standalone: true,
  imports: [
    CommonModule,
    AvatarModule,
    DividerModule,
    ButtonModule,
    AnimateOnScroll
  ],
  templateUrl: './about-us-section.component.html',
  styleUrls: ['./about-us-section.component.scss']
})
export class AboutUsSectionComponent {
  stats = [
    { value: '500+', label: 'Clientes satisfechos' },
    { value: '1000+', label: 'Autos vendidos' },
    { value: '50+', label: 'Marcas disponibles' }
  ];

  features = [
    {
      icon: 'pi pi-shield',
      title: 'Garantía extendida',
      description: 'Todos nuestros autos cuentan con garantía de motor y transmisión.'
    },
    {
      icon: 'pi pi-money-bill',
      title: 'Financiamiento',
      description: 'Ofrecemos opciones de financiamiento flexibles y accesibles.'
    }
  ];
}
