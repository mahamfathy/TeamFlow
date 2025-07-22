import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { TeamModule } from './modules/team/team.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, TeamModule, SharedModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
