import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { VehicleCardComponent } from '../../../components/vehicle-card/vehicle-card.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-inventory-section',
  standalone: true,
  imports: [
    CommonModule,
    CarouselModule,
    VehicleCardComponent,
    ButtonModule
  ],
  templateUrl: './inventory-section.component.html',
  styleUrls: ['./inventory-section.component.scss']
})
export class InventorySectionComponent {
  vehicles = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
      year: 2021,
      price: 25000,
      mileage: 25000,
      color: 'Blanco',
      fuelType: 'Gasolina',
      transmission: 'Automático',
      featured: true,
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Excelente estado, un solo dueño, mantenimiento al día.'
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Civic',
      year: 2020,
      price: 22000,
      mileage: 35000,
      color: 'Gris',
      fuelType: 'Híbrido',
      transmission: 'Automático',
      promo: '¡Oferta!',
      image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Tecnología híbrida, bajo consumo de combustible, equipamiento premium.'
    },
    {
      id: 3,
      brand: 'Nissan',
      model: 'Sentra',
      year: 2022,
      price: 23000,
      mileage: 15000,
      color: 'Negro',
      fuelType: 'Gasolina',
      transmission: 'CVT',
      image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Casi nuevo, garantía de fábrica, equipo completo.'
    },
    {
      id: 4,
      brand: 'Mazda',
      model: '3',
      year: 2019,
      price: 20000,
      mileage: 40000,
      color: 'Rojo',
      fuelType: 'Gasolina',
      transmission: 'Automático',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Diseño deportivo, interior premium, excelente manejo.'
    },
    {
      id: 5,
      brand: 'Hyundai',
      model: 'Tucson',
      year: 2020,
      price: 28000,
      mileage: 30000,
      color: 'Azul',
      fuelType: 'Diésel',
      transmission: 'Automático',
      promo: '¡Único!',
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'SUV espaciosa, perfecta para familia, equipamiento completo.'
    }
  ];

  responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    }
  ];
}
