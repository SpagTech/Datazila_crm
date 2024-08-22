import { Component, OnInit } from '@angular/core';
import { ChartService } from '../../chart.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-teamwisereport',
  templateUrl: './teamwisereport.component.html',
  styleUrls: ['./teamwisereport.component.css']
})
export class TeamwisereportComponent implements OnInit {
  private chart!: Chart<'bar'>;

  constructor(private chartService: ChartService) {}

  ngOnInit(): void {
    // Initialize the chart with login data
    this.chart = this.chartService.createBarChart('barChart', [
      {
        label: 'Team 1',
        data: [10, 5], // Replace with actual data
        backgroundColor: 'green',
        borderColor: 'darkgreen',
        borderWidth: 1
      },
      {
        label: 'Team 2',
        data: [15, 7], // Replace with actual data
        backgroundColor: 'blue',
        borderColor: 'darkblue',
        borderWidth: 1
      },
      {
        label: 'Team 3',
        data: [20, 10], // Replace with actual data
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
