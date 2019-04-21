import { Component, OnInit } from '@angular/core';
import { DashboardDataService } from '../../services/services-webapi/GetDashboard/dashboard-data.service'
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public daily: any;
  public weekly: any;
  public monthly: any;
  public total: any;

  constructor(private dash: DashboardDataService) { }

  ngOnInit() {

 
  }

}
