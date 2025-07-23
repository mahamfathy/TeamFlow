import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BaseChartDirective } from 'ng2-charts';
import { SideNavBarComponent } from '../../shared/components/side-nav-bar/side-nav-bar.component';
import { SharedModule } from '../../shared/shared.module';
import { DashboardHomeComponentComponent } from './components/dashboard-home-component/dashboard-home-component.component';
import { DashboardComponent } from './dashboard.component';
import { routes } from './dashboard.routes';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHomeComponentComponent,
    SideNavBarComponent,
  ],
  imports: [
    BaseChartDirective,
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
