import { Component, OnInit } from '@angular/core';
import { ReportsDataService } from '../../services/services-webapi/GetReports/reports-data.service';
import Fuse from 'fuse.js';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  public allreports: any = [];
  public breadcrumbs: any = [];
  public searchArgs: any;
  // search input type default 
  public inputType: string = "text";
  public inputName: string; // for field specifics
  public placeholder: string;
  constructor(private reports: ReportsDataService) { }

  ngOnInit() {
    document.body.style.overflowY = 'scroll';
    this.reports.getReports().subscribe(data => this.allreports = data);
    this.reports.getTrail().subscribe(data => this.breadcrumbs = data);
  }

  onSelect(event: any) {
    // reports
    if (event.target.value === "Department Name") {
      this.inputType = "text";
      this.inputName = event.target.value;
      this.placeholder = "";
      console.log(this.inputType, this.inputName)
    }
    else if (event.target.value === "Queue") {
      this.inputType = "number";
      this.inputName = event.target.value;
      this.placeholder = "";
      console.log(this.inputType, this.inputName)
    }
    else if (event.target.value === "Window Number") {
      this.inputType = "number";
      this.inputName = event.target.value;
      this.placeholder = "";
      console.log(this.inputType, this.inputName)
    }
    else if (event.target.value === "Date") {
      this.inputType = "text";
      this.inputName = event.target.value;
      this.placeholder = "MM/DD/YYYY";
      console.log(this.inputType, this.inputName)
    }
    // AUDIT!!!
    else if (event.target.value === "Admin ID") {
      this.inputType = "number";
      this.inputName = event.target.value;
      this.placeholder = "";
      console.log(this.inputType, this.inputName)
    }
    else if (event.target.value === "Admin") {
      this.inputType = "text";
      this.inputName = event.target.value;
      this.placeholder = "";
      console.log(this.inputType, this.inputName)
    }
    else if (event.target.value == "Activity") {
      this.inputType = "text";
      this.inputName = event.target.value;
      this.placeholder = "";
      console.log(this.inputType, this.inputName)
    }
    else if (event.target.value === "Date") {
      this.inputType = "text";
      this.inputName = event.target.value;
      this.placeholder = "MM/DD/YYYY";
      console.log(this.inputType, this.inputName)
    }
  }
  onKey(event: any) {
    this.searchArgs = event.target.value;
  }

  searchReports() {
    // by default lahat ng keys ay kasama sa parameters
    // general
    if (this.inputName === "Department Name") {
      this.reports.getReports().subscribe(data => {
        // fuse constructor
        type ReportsFuse = {
          DepartmentName: string;
        };
        // fuse data binding
        var reports: ReportsFuse[] = data;
        // fuse options | test muna lahat pag working tsaka iseparate by group
        var options: Fuse.FuseOptions<ReportsFuse> = {
          keys: ['DepartmentName']
        }
        // gawa ka options tas bind mo sa allreports
        var fuse = new Fuse(reports, options);
        var resFuse = fuse.search(this.searchArgs);
        console.log(resFuse);
        this.allreports = resFuse;
      });
      if (this.searchArgs.length == 0) {
        this.reports.getReports().subscribe(data => this.allreports = data);
      }
    }
    else if (this.inputName === "Queue") {
      this.reports.getReports().subscribe(data => {
        // fuse constructor
        type ReportsFuse = {
          QueueNumber: number;
        };
        var reports: ReportsFuse[] = data;
        // fuse options | test muna lahat pag working tsaka iseparate by group
        var options: Fuse.FuseOptions<ReportsFuse> = {
          keys: ['QueueNumber']
        }
        // gawa ka options tas bind mo sa allreports
        var fuse = new Fuse(reports, options);
        var resFuse = fuse.search(this.searchArgs);
        console.log(resFuse);
        this.allreports = resFuse;
      });
      if (this.searchArgs.length == 0) {
        this.reports.getReports().subscribe(data => this.allreports = data);
      }
    }
    else if (this.inputName === "Window Number") {
      this.reports.getReports().subscribe(data => {
        // fuse constructor
        type ReportsFuse = {
          WindowNum: number;
        };
        var reports: ReportsFuse[] = data;
        // fuse options | test muna lahat pag working tsaka iseparate by group
        var options: Fuse.FuseOptions<ReportsFuse> = {
          keys: ['WindowNum']
        }
        // gawa ka options tas bind mo sa allreports
        var fuse = new Fuse(reports, options);
        var resFuse = fuse.search(this.searchArgs);
        console.log(resFuse);
        this.allreports = resFuse;
      });
      if (this.searchArgs.length == 0) {
        this.reports.getReports().subscribe(data => this.allreports = data);
      }
    }
    else if (this.inputName === "Date") {
      this.reports.getReports().subscribe(data => {
        // fuse constructor
        type ReportsFuse = {
          Date: Date;
        };
        var reports: ReportsFuse[] = data;
        // fuse options | test muna lahat pag working tsaka iseparate by group
        var options: Fuse.FuseOptions<ReportsFuse> = {
          distance: 0,
          keys: ['Date']
        }
        // gawa ka options tas bind mo sa allreports
        var fuse = new Fuse(reports, options);
        var resFuse = fuse.search(this.searchArgs);
        console.log(resFuse);
        this.allreports = resFuse;
      });
      if (this.searchArgs.length == 0) {
        this.reports.getReports().subscribe(data => this.allreports = data);
      }
    }
  }

  searchAudit() {
    if (this.inputName === "Admin ID") {
      this.reports.getTrail().subscribe(data => {
        // fuse constructor
        type TrailFuse = {
          UserId: number;
        };
        var reports: TrailFuse[] = data;
        // fuse options | test muna lahat pag working tsaka iseparate by group
        var options: Fuse.FuseOptions<TrailFuse> = {
          keys: ['UserId']
        }
        // gawa ka options tas bind mo sa breadcrumbs
        var fuse = new Fuse(reports, options);
        var resFuse = fuse.search(this.searchArgs);
        console.log(resFuse);
        this.breadcrumbs = resFuse;
      });
      if (this.searchArgs.length == 0) {
        this.reports.getTrail().subscribe(data => this.breadcrumbs = data);
      }
    }
    else if (this.inputName === "Admin") {
      this.reports.getTrail().subscribe(data => {
        // fuse constructor
        type TrailFuse = {
          Admin: string;
        };
        var reports: TrailFuse[] = data;
        // fuse options | test muna lahat pag working tsaka iseparate by group
        var options: Fuse.FuseOptions<TrailFuse> = {
          keys: ['Admin']
        }
        // gawa ka options tas bind mo sa breadcrumbs
        var fuse = new Fuse(reports, options);
        var resFuse = fuse.search(this.searchArgs);
        console.log(resFuse);
        this.breadcrumbs = resFuse;
      });
      if (this.searchArgs.length == 0) {
        this.reports.getTrail().subscribe(data => this.breadcrumbs = data);
      }
    }
    else if (this.inputName === "Activity") {
      this.reports.getTrail().subscribe(data => {
        // fuse constructor
        type TrailFuse = {
          UserActivity: string;
        };
        var reports: TrailFuse[] = data;
        // fuse options | test muna lahat pag working tsaka iseparate by group
        var options: Fuse.FuseOptions<TrailFuse> = {
          keys: ['UserActivity']
        }
        // gawa ka options tas bind mo sa breadcrumbs
        var fuse = new Fuse(reports, options);
        var resFuse = fuse.search(this.searchArgs);
        console.log(resFuse);
        this.breadcrumbs = resFuse;
      });
      if (this.searchArgs.length == 0) {
        this.reports.getTrail().subscribe(data => this.breadcrumbs = data);
      }
    }
    else if (this.inputName === "Date") {
      this.reports.getTrail().subscribe(data => {
        // fuse constructor
        type TrailFuse = {
          CreatedAt: Date;
        };
        var reports: TrailFuse[] = data;
        // fuse options | test muna lahat pag working tsaka iseparate by group
        var options: Fuse.FuseOptions<TrailFuse> = {
          distance: 0,
          keys: ['CreatedAt']
        }
        // gawa ka options tas bind mo sa breadcrumbs
        var fuse = new Fuse(reports, options);
        var resFuse = fuse.search(this.searchArgs);
        console.log(resFuse);
        this.breadcrumbs = resFuse;
      });
      if (this.searchArgs.length == 0) {
        this.reports.getTrail().subscribe(data => this.breadcrumbs = data);
      }
    }
  }
}
