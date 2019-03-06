import { Component, OnInit, ViewChild } from '@angular/core';
import { GetDeptDataService } from '../../services/services-webapi/GetDepartments/get-dept-data.service';
//partner lagi dapat yung post pati data model
import { PostDeptsService } from '../../services/services-webapi/PostDepartment/post-depts.service'
import { PDepartments } from '../../models/queueing_models';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {
  // default view from menu
  public maintenance = "department";
  //data model for get?
  public dept: any = [];
  // data model for post? 
  public passdept = new PDepartments('Billing and Services', 3);

  constructor(private _GetDeptService: GetDeptDataService, private _PostDeptService: PostDeptsService) {
  }

  ngOnInit() {
    //get call
    this._GetDeptService.getDeptData()
      .subscribe(data => this.dept = data);
  }

  // post call
  onSubmit() {
    this._PostDeptService.addDept(this.passdept)
      .subscribe(
        data => console.log('Success!', data),
        error => console.error('Error!', error)
      )
  }

}
