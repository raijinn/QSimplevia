import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { DashboardDataService } from '../../services/services-webapi/GetDashboard/dashboard-data.service';
import moment from 'moment';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public daily: any;
  public weekly: any; // POST
  public monthly: any; // POST
  public total: any;

  constructor(private dash: DashboardDataService) { }

  ngOnInit() {
    //submits date into a form
    var monday = <NgForm>{
      value: {
        Date: this.getMonday()
      }
    };
    var month = <NgForm>{
      value: {
        Date: this.getCurrentMonth()
      }
    }
    console.log(this.getMonday());
    console.log(this.getCurrentMonth());

    this.dash.getDaily()
      .subscribe(data => this.daily = data);

    this.dash.getWeekly(monday.value)
      .subscribe(data => this.weekly = data)

    this.dash.getMonthly(month.value)
      .subscribe(data => this.monthly = data)

    this.dash.getAllTimeTotal()
      .subscribe(data => this.total = data);
  }


  getCurrentMonth() {
    var d = new Date();
    return (d.getMonth()+1) + "/" + d.getFullYear()
  }
  
  getMonday() {
    var d = new Date();
    var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
    var result = new Date(d.setDate(diff));
    //formats into acceptable string format
    return result.getFullYear() + "/" + (result.getMonth() + 1) + "/" + result.getDate();
  }
}
