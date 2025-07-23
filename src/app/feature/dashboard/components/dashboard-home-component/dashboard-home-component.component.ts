import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard-home-component',
  standalone: false,
  templateUrl: './dashboard-home-component.component.html',
  styleUrl: './dashboard-home-component.component.scss',
})
export class DashboardHomeComponentComponent {
  barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Dev', 'QA', 'Designer'],
    datasets: [
      {
        label: 'Team Count',
        data: [4, 2, 1],
        backgroundColor: '#7e22ce',
      },
    ],
  };

  barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  };
}
