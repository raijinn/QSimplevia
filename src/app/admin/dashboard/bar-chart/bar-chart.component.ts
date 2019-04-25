import { Component, OnInit } from '@angular/core';
import { DeptDataService } from '../../../services/services-webapi/GetDepartments/dept-data.service';
import { DashboardDataService } from '../../../services/services-webapi/GetDashboard/dashboard-data.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  public deptlabels: any = [];
  public weeklydata: any = [];

  // chart config
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

  constructor(private _deptService: DeptDataService, private _dashboardService: DashboardDataService) { }

  ngOnInit() {
    // get every monday, check and assign it to each week 
    this._deptService.getDeptNames()
      .subscribe(data => this.deptlabels = data);
    this._dashboardService.getWeekly().subscribe(data => this.weeklydata = data); 
    // set mo per label tapos insert yung limang data into 
    var weekly = document.getElementById("deptchart")
    this.addData(weekly);
  }

  // addchartdata(chart, data label, dataset)
  addData(chart) {
    chart.data.labels.push(this.deptlabels);
    chart.data.datasets.forEach((dataset) => {
      dataset.data.push(this.weeklydata);
    });
    chart.update();
  }
}
