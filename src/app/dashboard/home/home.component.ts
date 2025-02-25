import { Component, OnInit } from '@angular/core';
import { ChartService } from '../../chart.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private chart!: Chart<'bar'>;

  constructor(private chartService: ChartService) {}

  ngOnInit(): void {
    this.chart = this.chartService.createBarChart('barChart', [
      {
        label: 'Team 1',
        data: [100, 59],
        backgroundColor: 'green',
        borderColor: 'darkgreen',
        borderWidth: 1
      },
      {
        label: 'Team 2',
        data: [50, 49],
        backgroundColor: 'blue',
        borderColor: 'darkblue',
        borderWidth: 1
      },
      {
        label: 'Team 3',
        data: [70, 60],
        backgroundColor: 'orange',
        borderColor: 'darkorange',
        borderWidth: 1
      }
    ]);
  }

  onTeamChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const selectedTeam = target.value;
    this.chartService.updateChart('barChart', selectedTeam);
  }
}
