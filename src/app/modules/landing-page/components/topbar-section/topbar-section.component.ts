import { Component } from '@angular/core';
import { StyleClassModule } from 'primeng/styleclass';
import { Router, RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-topbar-section',
  imports: [
    RouterModule,
    StyleClassModule,
    ButtonModule,
    RippleModule
  ],
  templateUrl: './topbar-section.component.html',
  styleUrl: './topbar-section.component.scss'
})
export class TopbarSectionComponent {
  constructor(public router: Router) {}
}
