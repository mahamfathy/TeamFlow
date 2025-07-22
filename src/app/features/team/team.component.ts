import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamMember } from './interfaces/team';
import { TeamService } from './services/team.service';

@Component({
  selector: 'app-team',
  standalone: false,
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent {
  $teamMembers?: Observable<TeamMember[]>;
  constructor(private teamService: TeamService) {
    this.$teamMembers = this.teamService.member$;
  }
  filter(role: string) {
    this.teamService.filteredMemberByRole(role);
  }
}
