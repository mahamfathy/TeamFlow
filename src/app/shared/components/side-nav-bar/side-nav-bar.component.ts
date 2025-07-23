import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav-bar',
  standalone: false,
  templateUrl: './side-nav-bar.component.html',
  styleUrl: './side-nav-bar.component.scss',
})
export class SideNavBarComponent {
  @Output() linkClicked = new EventEmitter<void>();
}
