import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'team',
    loadChildren: () =>
      import('./feature/dashboard/modules/team/team.module').then(
        (m) => m.TeamModule
      ),
  },
];
