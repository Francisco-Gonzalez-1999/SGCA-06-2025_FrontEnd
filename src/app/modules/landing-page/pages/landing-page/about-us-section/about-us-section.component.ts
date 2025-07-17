import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-about-us-section',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    DividerModule
  ],
  templateUrl: './about-us-section.component.html',
  styleUrls: ['./about-us-section.component.scss']
})
export class AboutUsSectionComponent {
  stats = [
    { value: '10+', label: 'Años de experiencia' },
    { value: '5,000+', label: 'Clientes satisfechos' },
    { value: '98%', label: 'Rating positivo' }
  ];

  features = [
    {
      icon: 'pi pi-shield',
      title: 'Garantía Certificada',
      description: 'Todos nuestros vehículos pasan por una rigurosa inspección de 150 puntos y cuentan con garantía extendida.'
    },
    {
      icon: 'pi pi-star',
      title: 'Calidad Premium',
      description: 'Seleccionamos solo los mejores autos seminuevos del mercado para ofrecerte lo mejor.'
    },
    {
      icon: 'pi pi-wallet',
      title: 'Financiamiento Flexible',
      description: 'Te ayudamos a encontrar el plan de financiamiento que mejor se adapte a tus necesidades.'
    }
  ];
}
