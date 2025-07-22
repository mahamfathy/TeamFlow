import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { TeamComponent } from './team.component';

@NgModule({
  declarations: [TeamComponent],
  imports: [SharedModule],
})
export class TeamModule {}
