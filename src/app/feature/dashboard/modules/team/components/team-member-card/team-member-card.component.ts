import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { TeamMember } from '../../interfaces/team-member.interface';

@Component({
  selector: 'app-team-member-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-member-card.component.html',
  styleUrl: './team-member-card.component.scss',
})
export class TeamMemberCardComponent {
  @Input() member!: TeamMember;
  @Output() close = new EventEmitter<void>();
  @HostListener('document:keydown.escape', ['$event'])
  onCloseModal(event: KeyboardEvent) {
    event.preventDefault();
    this.close.emit();
  }
}
