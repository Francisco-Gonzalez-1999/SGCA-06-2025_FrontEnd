import { Routes } from '@angular/router';
import { LayoutComponent } from './modules/layout/components/layout/layout.component';
import { DashboardComponent } from './modules/admin/pages/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component:LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'admin', loadChildren: () => import('./modules/admin/admin.routes')}
    ]
  },
  {
    path: 'landing',
    children: [
      { path: '', loadChildren: () => import('./modules/landing-page/landing-page.routes')}
    ]
  }
];
