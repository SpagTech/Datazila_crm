import { Injectable } from '@angular/core';
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  private charts: { [key: string]: Chart<'bar'> } = {};

  constructor() {
    // Register the necessary components
    Chart.register(...registerables);
  }

  createBarChart(canvasId: string, datasets: ChartData<'bar'>['datasets']): Chart<'bar'> {
    const ctx = (document.getElementById(canvasId) as HTMLCanvasElement).getContext('2d');
    if (!ctx) throw new Error(`Canvas with id ${canvasId} not found`);

    this.charts[canvasId] = new Chart<'bar'>(ctx, {
      type: 'bar',
      data: {
        labels: ['TPH', 'SPH'], // Labels for the X axis
        datasets: datasets
      },
      options: this.getChartOptions()
    });

    return this.charts[canvasId];
  }

  updateChart(canvasId: string, selectedTeam: string): void {
    const chart = this.charts[canvasId];
    if (!chart) throw new Error(`Chart with id ${canvasId} not found`);

    // Show only the selected team's data and hide the others
    chart.data.datasets.forEach((dataset, index) => {
      dataset.hidden = selectedTeam === 'all' ? false : index.toString() !== selectedTeam;
    });

    chart.update();
  }

  private getChartOptions(): ChartOptions<'bar'> {
    return {
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
    };
  }
}
