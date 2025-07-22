import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { FilterComponent } from './components/filter/filter.component';
import { TeamMemberCardComponent } from './components/team-member-card/team-member-card.component';
import { TeamMember } from './interfaces/team';
import { TeamService } from './services/team.service';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [SharedModule, FilterComponent, TeamMemberCardComponent],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  filteredMembers: TeamMember[] = [];
  selectedMember: any = null;

  constructor(private teamService: TeamService) {}

  ngOnInit() {
    this.teamService.member$.subscribe((members) => {
      this.filteredMembers = members;
    });
  }

  filter(role: string) {
    if (role === 'All') {
      this.teamService.resetFilter();
    } else {
      this.teamService.filteredMemberByRole(role);
    }
  }
  selectMember(member: TeamMember) {
    this.selectedMember = member;
  }
}
