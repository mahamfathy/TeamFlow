import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedModule } from '../../../../../../shared/shared.module';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  @Input() filterOption: string[] = [];
  @Output() selectedFilter: EventEmitter<string> = new EventEmitter<string>();
  onFilterChange(value: string) {
    this.selectedFilter.emit(value);
  }
}
