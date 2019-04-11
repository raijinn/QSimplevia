import { Component, OnInit } from '@angular/core';

import { ReportsDataService } from '../../services/services-webapi/GetReports/reports-data.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  public allreports: any = [];
  public breadcrumbs: any = [];
  public searchArgs: any;
  public dateArg: Date = new Date("April 04, 2019 00:00:00");
  // search input type default 
  public inputType: string = "text";

  constructor(private reports: ReportsDataService) { }

  ngOnInit() {
    document.body.style.overflowY = 'scroll';
    this.reports.getReports().subscribe(data => this.allreports = data);
    // console.log(this.searchArgs)2020-04-11T00:00:00
    this.reports.getTrail().subscribe(data => this.breadcrumbs = data);
  }

  onSelect(event: any) {
    // perhaps add a variable para maistore yung event.target.value para magamit sa search
    if (event.target.value === "Department Name" || event.target.value === "Admin" || event.target.value === "User Activity") {
      this.inputType = "text"
    }
    else if (event.target.value === "Queue" || event.target.value === "Window Number" || event.target.value === "Admin ID") {
      this.inputType = "number"
    }
    else if (event.target.value === "Date" || event.target.value === "CreatedAt") {
      this.inputType = "date"
    }
  }
  onKey(event: any) {
    this.searchArgs = event.target.value;
    this.dateArg = event.target.value;
  }

  searchReports() {
    // lagay yung reset pag empty yung input box
    // if else kailangan match dun sa search by yung finifilter mo ogag
    // console.log(this.inputType+': '+ event.target.value);
    if (this.inputType === "text") {
      this.reports.getReports().subscribe(data => this.allreports = data.filter(allreports => allreports.DepartmentName === this.searchArgs));
      console.log(this.allreports)
    }
    else if (this.inputType === "number") {
      this.reports.getReports().subscribe(data => this.allreports = data.filter(allreports => allreports.Queue === parseInt(this.searchArgs)));
      console.log(this.allreports);
    }
    else if (this.inputType === "date") {
      this.reports.getReports().subscribe(data => this.allreports = data.filter(allreports => allreports.Date === this.dateArg));
      console.log(this.dateArg);
    }
  }

  searchAudit() {
    //pakifilter gamit yung query pliz along with onkeyup
    if (this.inputType === "text") {
      this.reports.getTrail().subscribe(data => this.breadcrumbs = data.filter(breadcrumbs => breadcrumbs.UserActivity === this.searchArgs));
    }
    else if (this.inputType === "number") {
      this.reports.getTrail().subscribe(data => this.breadcrumbs = data.filter(breadcrumbs => breadcrumbs.UserActivity === this.searchArgs));
      console.log(this.allreports);
    }

  }

}
