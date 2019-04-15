import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  public ChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
    
  };
  public ChartLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  public ChartType = 'bar';
  public ChartLegend = true;
  public ChartData = [
    { data: [65, 59, 80, 81, 56], label: "Mayor's Office", fill: false },
    { data: [43, 13, 73, 64, 69], label: "Vice Mayor's Office", fill: false }

  ];
  constructor() { }

  ngOnInit() {
  }

}
