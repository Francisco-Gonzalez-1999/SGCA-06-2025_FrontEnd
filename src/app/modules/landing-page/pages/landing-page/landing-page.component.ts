import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TopbarSectionComponent } from '../../components/topbar-section/topbar-section.component';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-landing-page',
  imports: [
    RouterModule,
    TopbarSectionComponent,
    ButtonModule
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
