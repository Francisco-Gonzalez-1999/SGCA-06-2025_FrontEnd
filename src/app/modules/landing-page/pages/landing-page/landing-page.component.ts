import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Compoentes
import { TopbarSectionComponent } from './topbar-section/topbar-section.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { ServicesSectionComponent } from './services-section/services-section.component';

// Primeng
import { ButtonModule } from 'primeng/button';
import { InventorySectionComponent } from "./inventory-section/inventory-section.component";
import { AboutUsSectionComponent } from "./about-us-section/about-us-section.component";
import { FooterSectionComponent } from "./footer-section/footer-section.component";

@Component({
  selector: 'app-landing-page',
  imports: [
    RouterModule,
    CommonModule,
    TopbarSectionComponent,
    HomeSectionComponent,
    ServicesSectionComponent,
    ButtonModule,
    InventorySectionComponent,
    AboutUsSectionComponent,
    FooterSectionComponent
],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
