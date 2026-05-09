import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartsChartComponent } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
import { TaskService } from '../task.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HighchartsChartComponent, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  chartOptions: Highcharts.Options = {};

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      const completedCount = tasks.filter((t) => t.completed).length;
      const pendingCount = tasks.filter((t) => !t.completed).length;

      this.chartOptions = {
        chart: {
          type: 'pie',
        },
        title: {
          text: 'Task Status Overview',
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.y}</b>',
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.y}',
            },
          },
        },
        series: [
          {
            type: 'pie',
            name: 'Tasks',
            data: [
              { name: 'Completed', y: completedCount, color: '#28a745' },
              { name: 'Pending', y: pendingCount, color: '#dc3545' },
            ],
          },
        ],
      };
    });
  }
}
