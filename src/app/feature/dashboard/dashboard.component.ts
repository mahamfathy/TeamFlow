import {
  animate,
  group,
  query,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        query(
          ':enter, :leave',
          [
            style({
              position: 'absolute',
              width: '100%',
              top: 0,
              left: 0,
              opacity: 0,
              transform: 'scale(0.9)',
            }),
          ],
          { optional: true }
        ),
        group([
          query(
            ':leave',
            [
              animate(
                '200ms ease-out',
                style({ opacity: 0, transform: 'scale(1.1)' })
              ),
            ],
            { optional: true }
          ),
          query(
            ':enter',
            [
              animate(
                '300ms ease-out',
                style({ opacity: 1, transform: 'scale(1)' })
              ),
            ],
            { optional: true }
          ),
        ]),
      ]),
    ]),
    trigger('sidebarAnimation', [
      state(
        'closed',
        style({
          transform: 'translateX(-100%)',
          opacity: 0,
        })
      ),
      state(
        'open',
        style({
          transform: 'translateX(0)',
          opacity: 1,
        })
      ),
      transition('closed => open', [animate('300ms ease-out')]),
      transition('open => closed', [animate('300ms ease-in')]),
    ]),
  ],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  isSidebarOpen: boolean = false;
  isMobile: boolean = false;
  sidebarShouldBeHidden = false;
  routeAnimationState: string | undefined;
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.isMobile = window.innerWidth < 768;
    this.routeAnimationState = 'HomePage';
  }
  ngAfterViewInit() {
    this.routeAnimationState = 'HomePage';
    this.cdr.detectChanges();
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar() {
    if (!this.screenIsDesktop && this.isSidebarOpen) {
      this.isSidebarOpen = false;
    }
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
  screenIsDesktop = window.innerWidth >= 768;

  @HostListener('window:resize')
  onResize() {
    this.screenIsDesktop = window.innerWidth >= 768;
  }

  onSidebarAnimationDone(event: any) {
    if (event.toState === 'closed' && !this.screenIsDesktop) {
      this.sidebarShouldBeHidden = true;
    } else {
      this.sidebarShouldBeHidden = false;
    }
  }
}
