import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'app-menu',
  imports: [
    CommonModule,
    MenuItemComponent,
    RouterModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  model: MenuItem[] = [];

  ngOnInit() {
      this.model = [
          {
              label: 'Home',
              items: [
                { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                { label: 'landing', icon: 'pi pi-fw pi-home', routerLink: ['/landing'] },
              ]
          }
      ];
  }
}
