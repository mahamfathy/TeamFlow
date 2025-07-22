import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { TeamComponent } from './team.component';
import { routes } from './team.routes';

@NgModule({
  declarations: [TeamComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class TeamModule {}
