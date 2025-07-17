import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vehicle-card',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, TagModule, RouterModule],
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.scss']
})
export class VehicleCardComponent {
  @Input() vehicle: any;
  @Input() showDetails: boolean = true;
}
