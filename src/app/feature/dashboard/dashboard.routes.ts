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
        path: 'home',
        component: DashboardHomeComponentComponent,
        data: { animation: 'HomePage' },
      },
      {
        path: 'team',
        component: TeamComponent,
        data: { animation: 'TeamPage' },
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];
