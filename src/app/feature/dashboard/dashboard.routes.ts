import { Routes } from '@angular/router';
import { DashboardHomeComponentComponent } from './components/dashboard-home-component/dashboard-home-component.component';
import { DashboardComponent } from './dashboard.component';
import { TeamComponent } from './modules/team/team.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: DashboardHomeComponentComponent,
      },
      {
        path: 'team',
        component: TeamComponent,
      },
    ],
  },
];
