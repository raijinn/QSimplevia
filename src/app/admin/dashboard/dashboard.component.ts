import { Component, OnInit } from '@angular/core';
import { DeptDataService } from '../../services/services-webapi/GetDepartments/dept-data.service';
import { GetDQdataService } from '../../services/services-webapi/GetDailyQueue/get-dqdata.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public dept: any = [];
  public uDept: any = [];
  constructor(private _DeptService: DeptDataService, private _DQService: GetDQdataService) { }

  ngOnInit() {
     // GET
     this._DQService.getdailyqData()
     .subscribe(data => this.dept = data);

     this._DeptService.getDeptData()
     .subscribe(data => this.uDept = data);    
  }

}
