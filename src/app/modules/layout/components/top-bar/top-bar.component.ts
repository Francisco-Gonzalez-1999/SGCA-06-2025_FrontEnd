import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { ConfiguratorComponent } from '../configurator/configurator.component';
import { LayoutService } from '../../service/layout.service';

@Component({
  selector: 'app-topbar',
  imports: [RouterModule, CommonModule, StyleClassModule, ConfiguratorComponent],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  items!: MenuItem[];

  constructor(public layoutService: LayoutService) {}

  toggleDarkMode() {
      this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
  }

}
