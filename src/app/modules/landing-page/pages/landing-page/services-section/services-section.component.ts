import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    AnimateOnScrollModule,
    TagModule
  ],
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss']
})
export class ServicesSectionComponent {
  services = [
    {
      title: 'Compra de Autos Seminuevos',
      description: 'Amplio catálogo de vehículos seminuevos certificados con garantía y revisión mecánica completa.',
      icon: 'pi pi-car',
      tag: 'Popular',
      animation: 'fadeleft'
    },
    {
      title: 'Venta con Garantía',
      description: 'Ofrecemos garantía extendida en todos nuestros vehículos para tu completa tranquilidad.',
      icon: 'pi pi-shield',
      animation: 'fadeup'
    },
    {
      title: 'Financiamiento',
      description: 'Soluciones crediticias a tu medida con las mejores tasas del mercado.',
      icon: 'pi pi-credit-card',
      animation: 'faderight'
    },
    {
      title: 'Inspección Técnica',
      description: 'Revisión profesional de 150 puntos para garantizar el estado óptimo del vehículo.',
      icon: 'pi pi-check-circle',
      animation: 'fadeleft'
    },
    {
      title: 'Entrega a Domicilio',
      description: 'Servicio de entrega del vehículo en la comodidad de tu hogar.',
      icon: 'pi pi-home',
      animation: 'fadedown'
    },
    {
      title: 'Asesoría Personalizada',
      description: 'Expertos en autos te ayudarán a encontrar el vehículo perfecto para tus necesidades.',
      icon: 'pi pi-users',
      tag: 'Nuevo',
      animation: 'faderight'
    }
  ];
}
