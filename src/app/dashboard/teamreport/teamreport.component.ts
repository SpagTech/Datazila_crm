import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-teamreport',
  templateUrl: './teamreport.component.html',
  styleUrls: ['./teamreport.component.css']
})
export class TeamreportComponent implements OnInit {
  private chart!: Chart<'bar'>;

  constructor() {}

  ngOnInit(): void {
    // Register the necessary components
    Chart.register(...registerables);
    this.createBarChart();
  }

  createBarChart() {
    const ctx = (document.getElementById('barChart') as HTMLCanvasElement).getContext('2d');

    this.chart = new Chart(ctx!, {
      type: 'bar',
      data: {
        labels: ['TPH', 'SPH'], // Labels for the X axis
        datasets: [
          {
            label: 'Team 1',
            data: [100, 59], // Replace with Team 1's TPH and SPH data
            backgroundColor: 'green',
            borderColor: 'darkgreen',
            borderWidth: 1
          },
          {
            label: 'Team 2',
            data: [55, 49], // Replace with Team 2's TPH and SPH data
            backgroundColor: 'blue',
            borderColor: 'darkblue',
            borderWidth: 1
          },
          {
            label: 'Team 3',
            data: [70, 60], // Replace with Team 3's TPH and SPH data
            backgroundColor: 'orange',
            borderColor: 'darkorange',
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          x: {
            stacked: false, // Don't stack bars, show them grouped
            grid: {
              display: false // Hide the grid lines for better visibility
            }
          },
          y: {
            beginAtZero: true,
            grid: {
              display: true // Show grid lines for y-axis
            }
          }
        },
        plugins: {
          legend: {
            display: true // Display the legend to differentiate between datasets
          }
        }
      }
    });
  }

  onTeamChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const selectedTeam = target.value;

    const datasets = this.chart.data.datasets;
    datasets.forEach((dataset, index) => {
      // Hide all datasets initially
      dataset.hidden = true;
    });

    if (selectedTeam === 'all') {
      // Show all datasets
      datasets.forEach((dataset) => {
        dataset.hidden = false;
      });
    } else {
      // Show only the selected team
      const teamIndex = selectedTeam === 'team1' ? 0 : selectedTeam === 'team2' ? 1 : 2;
      datasets[teamIndex].hidden = false;
    }

    // Update the chart to reflect the changes
    this.chart.update();
  }
}
