import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedModule } from '../../../../../../shared/shared.module';
import { TeamMember } from '../../interfaces/team';

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

  selectMember(member: TeamMember) {
    this.viewClicked.emit(member);
  }
}
