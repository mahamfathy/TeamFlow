import { Component, OnInit } from '@angular/core';
import { TeamMember } from './interfaces/team';
import { TeamService } from './services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  filteredMembers: TeamMember[] = [];

  constructor(private teamService: TeamService) {}

  ngOnInit() {
    this.teamService.member$.subscribe((members) => {
      this.filteredMembers = members;
    });
  }

  filter(role: string) {
    if (role === 'all') {
      this.teamService.resetFilter();
    } else {
      this.teamService.filteredMemberByRole(role);
    }
  }
}
