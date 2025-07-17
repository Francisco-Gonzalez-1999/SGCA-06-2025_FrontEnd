import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-footer-section',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule
  ],
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.scss']
})
export class FooterSectionComponent {

}
