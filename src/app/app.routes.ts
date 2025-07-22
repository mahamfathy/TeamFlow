import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'team',
    loadChildren: () =>
      import('./features/team/team.module').then((m) => m.TeamModule),
  },
];
