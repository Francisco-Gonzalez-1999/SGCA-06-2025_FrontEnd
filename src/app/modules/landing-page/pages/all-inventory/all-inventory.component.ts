import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleCardComponent } from '../../components/vehicle-card/vehicle-card.component';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { CheckboxModule } from 'primeng/checkbox';
import { PaginatorModule } from 'primeng/paginator';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';

interface Vehicle {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  color: string;
  fuelType: string;
  transmission: string;
  featured?: boolean;
  promo?: string;
  image: string;
  description: string;
}

type SortableVehicleField = 'price' | 'year' | 'mileage';

@Component({
  selector: 'app-all-inventory',
  standalone: true,
  imports: [
    CommonModule,
    VehicleCardComponent,
    FormsModule,
    DropdownModule,
    InputTextModule,
    SliderModule,
    MultiSelectModule,
    CheckboxModule,
    PaginatorModule,
    DividerModule,
    CardModule
  ],
  templateUrl: './all-inventory.component.html',
  styleUrls: ['./all-inventory.component.scss']
})

export class AllInventoryComponent {
  vehicles: Vehicle[] = [
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
    // Add more vehicles as needed (you can expand this list)
    {
      id: 6,
      brand: 'Ford',
      model: 'Mustang',
      year: 2018,
      price: 35000,
      mileage: 28000,
      color: 'Rojo',
      fuelType: 'Gasolina',
      transmission: 'Automático',
      image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Deportivo clásico, excelente aceleración, llamativo color rojo.'
    },
    {
      id: 7,
      brand: 'Chevrolet',
      model: 'Spark',
      year: 2021,
      price: 15000,
      mileage: 18000,
      color: 'Azul',
      fuelType: 'Gasolina',
      transmission: 'Manual',
      image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Económico, bajo consumo, perfecto para ciudad.'
    },
    {
      id: 8,
      brand: 'Volkswagen',
      model: 'Tiguan',
      year: 2019,
      price: 32000,
      mileage: 42000,
      color: 'Negro',
      fuelType: 'Diésel',
      transmission: 'Automático',
      image: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'SUV espaciosa, confortable, ideal para viajes.'
    }
  ];

  // Filter options
  brands = ['Toyota', 'Honda', 'Nissan', 'Mazda', 'Hyundai', 'Ford', 'Chevrolet', 'Volkswagen'];
  fuelTypes = ['Gasolina', 'Diésel', 'Híbrido', 'Eléctrico'];
  transmissions = ['Automático', 'Manual', 'CVT'];
  colors = ['Blanco', 'Gris', 'Negro', 'Rojo', 'Azul'];

  // Filter values
  selectedBrands: string[] = [];
  selectedFuelTypes: string[] = [];
  selectedTransmissions: string[] = [];
  selectedColors: string[] = [];
  priceRange: [number, number] = [0, 50000];
  yearRange: [number, number] = [2015, 2023];
  searchText = '';

  // Sorting
  sortOptions = [
    { label: 'Precio: Más bajo primero', value: 'price-asc' },
    { label: 'Precio: Más alto primero', value: 'price-desc' },
    { label: 'Año: Más nuevo primero', value: 'year-desc' },
    { label: 'Año: Más antiguo primero', value: 'year-asc' },
    { label: 'Kilometraje: Más bajo primero', value: 'mileage-asc' },
    { label: 'Kilometraje: Más alto primero', value: 'mileage-desc' }
  ];
  selectedSort = 'price-asc';

  // Pagination
  first = 0;
  rows = 9;
  totalRecords = 0;

  get filteredVehicles() {
    let result = [...this.vehicles];

    // Apply search filter
    if (this.searchText) {
      const searchLower = this.searchText.toLowerCase();
      result = result.filter(v =>
        v.brand.toLowerCase().includes(searchLower) ||
        v.model.toLowerCase().includes(searchLower) ||
        v.description.toLowerCase().includes(searchLower))
    }

    // Apply brand filter
    if (this.selectedBrands.length > 0) {
      result = result.filter(v => this.selectedBrands.includes(v.brand));
    }

    // Apply fuel type filter
    if (this.selectedFuelTypes.length > 0) {
      result = result.filter(v => this.selectedFuelTypes.includes(v.fuelType));
    }

    // Apply transmission filter
    if (this.selectedTransmissions.length > 0) {
      result = result.filter(v => this.selectedTransmissions.includes(v.transmission));
    }

    // Apply color filter
    if (this.selectedColors.length > 0) {
      result = result.filter(v => this.selectedColors.includes(v.color));
    }

    // Apply price range filter
    result = result.filter(v => v.price >= this.priceRange[0] && v.price <= this.priceRange[1]);

    // Apply year range filter
    result = result.filter(v => v.year >= this.yearRange[0] && v.year <= this.yearRange[1]);

    // Apply sorting
    const [sortField, sortOrder] = this.selectedSort.split('-') as [SortableVehicleField, 'asc' | 'desc'];

    result.sort((a, b) => {
      // These values are guaranteed to exist since we're using SortableVehicleField
      const aValue = a[sortField];
      const bValue = b[sortField];

      if (aValue === bValue) return 0;

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    // Update total records for pagination
    this.totalRecords = result.length;

    // Apply pagination
    return result.slice(this.first, this.first + this.rows);
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  resetFilters() {
    this.selectedBrands = [];
    this.selectedFuelTypes = [];
    this.selectedTransmissions = [];
    this.selectedColors = [];
    this.priceRange = [0, 50000];
    this.yearRange = [2015, 2023];
    this.searchText = '';
    this.selectedSort = 'price-asc';
    this.first = 0;
  }
}
