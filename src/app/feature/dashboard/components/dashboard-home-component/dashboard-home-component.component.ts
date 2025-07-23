import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { ChartConfiguration, ChartData, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import Typewriter from 't-writer.js';
import { CardInfo } from '../../interfaces/card-info.interface';
import { TeamMember } from '../../modules/team/interfaces/team-member.interface';
import { TeamService } from '../../modules/team/services/team.service';

@Component({
  selector: 'app-dashboard-home-component',
  templateUrl: './dashboard-home-component.component.html',
  styleUrls: ['./dashboard-home-component.component.scss'],
})
export class DashboardHomeComponentComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @ViewChildren(BaseChartDirective)
  charts!: QueryList<BaseChartDirective>;

  private destroy$ = new Subject<void>();
  cards: CardInfo[] = [
    {
      title: 'Overview',
      content: 'Some overview stats or message here.',
    },
    {
      title: 'Team Summary',
      content: 'Quick summary about your team.',
    },
    {
      title: 'Notifications',
      content: 'You have 5 unread notifications.',
    },
  ];
  teamMembers: TeamMember[] = [];

  // Chart 1: Team Roles
  barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [
      {
        label: 'Team Roles',
        data: [],
        backgroundColor: ['#8B5CF6', '#FBBF24', '#34D399'],
      },
    ],
  };

  barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: { display: true },
    },
  };

  // Chart 2: Performance
  performanceChartData: ChartData<'doughnut'> = {
    labels: ['Excellent (80-100)', 'Good (60-79)', 'Needs Improvement (<60)'],
    datasets: [
      {
        label: 'Performance Distribution',
        data: [0, 0, 0],
        backgroundColor: ['#34D399', '#FBBF24', '#EF4444'],
        borderColor: '#ffffff',
        borderWidth: 2,
      },
    ],
  };

  performanceChartOptions: ChartOptions<'doughnut'> = {
    responsive: false,
    maintainAspectRatio: false,
    cutout: '60%',
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#374151',
          font: { size: 14 },
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#111827',
        titleColor: '#F9FAFB',
        bodyColor: '#E5E7EB',
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  };

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.teamService.member$
      .pipe(
        takeUntil(this.destroy$),
        tap((members) => {
          this.teamMembers = members;

          // Bar Chart: Role
          const roleCounts: { [role: string]: number } = {};
          members.forEach((m) => {
            roleCounts[m.role] = (roleCounts[m.role] || 0) + 1;
          });
          this.barChartData.labels = Object.keys(roleCounts);
          this.barChartData.datasets[0].data = Object.values(roleCounts);

          // Doughnut Chart: Performance
          let excellent = 0;
          let good = 0;
          let needsImprovement = 0;

          members.forEach((member) => {
            if (member.performance >= 80) {
              excellent++;
            } else if (member.performance >= 60) {
              good++;
            } else {
              needsImprovement++;
            }
          });

          this.performanceChartData.datasets[0].data = [
            excellent,
            good,
            needsImprovement,
          ];

          setTimeout(() => {
            this.charts.forEach((chart) => chart.update());
          });
        })
      )
      .subscribe();
  }

  ngAfterViewInit(): void {
    const target = document.querySelector('.typewriter');

    const writer = new Typewriter(target, {
      loop: true,
      typeColor: '',
    });

    writer
      .type('Welcome to Teamflow Dashboard')
      .rest(1500)
      .remove('Welcome to Teamflow Dashboard'.length)
      .rest(500)
      .start();
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
