import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedModule } from '../../../../../../shared/shared.module';
import { TeamMember } from '../../interfaces/team-member.interface';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input() members: TeamMember[] = [];
  @Output() viewClicked = new EventEmitter<any>();
  getKeys(): string[] {
    if (this.members && this.members.length > 0) {
      return Object.keys(this.members[0]).slice(1, -1);
    }
    return [];
  }

  selectMember(member: TeamMember) {
    this.viewClicked.emit(member);
  }
}
