import { Component, OnInit } from '@angular/core';
import { DashboardDataService } from '../../services/services-webapi/GetDashboard/dashboard-data.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public daily: any = []; 
  public weekly: any = []; 
  public monthly: any = []; 
  public total: any = []; 

  constructor(private dash: DashboardDataService) { }

  ngOnInit() {
    this.dash.getDaily().subscribe(data => this.daily = data);
    this.dash.getWeekly().subscribe(data => this.weekly = data);
    this.dash.getMonthly().subscribe(data => this.monthly = data);
    this.dash.getAllTimeTotal().subscribe(data => this.total = data);
  }

}
