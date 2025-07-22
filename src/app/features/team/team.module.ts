import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TeamComponent } from './team.component';
import { routes } from './team.routes';

@NgModule({
  declarations: [TeamComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TeamModule {}
