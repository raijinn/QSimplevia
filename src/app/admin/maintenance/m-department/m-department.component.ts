import { Component, OnInit, ViewChild } from '@angular/core';
import { GetDeptDataService } from '../../../services/services-webapi/GetDepartments/get-dept-data.service';
//partner lagi dapat yung post pati data model
import { PostDeptsService } from '../../../services/services-webapi/PostDepartment/post-depts.service';
import { PutDeptService } from '../../../services/services-webapi/UpdateDepartments/put-dept.service';
import { DelDeptService } from '../../../services/services-webapi/DeleteDepartments/del-dept.service';
import { PSDepartments } from '../../../models/queueing_models';

@Component({
  selector: 'app-m-department',
  templateUrl: './m-department.component.html',
  styleUrls: ['./m-department.component.css']
})
export class MDepartmentComponent implements OnInit {
  // default view from menu
  public maintenance = "department";
  //data model for get?
  public dept: any = [];
  // data model for post? 
  public passdept = new PSDepartments('', 0);
  // need ba data model for put????????

  constructor(private _GetDeptService: GetDeptDataService, private _PostDeptService: PostDeptsService, private _PutDeptService: PutDeptService, private _DelDeptService: DelDeptService) { }

  ngOnInit() {
    // GET
    this._GetDeptService.getDeptData()
      .subscribe(data => this.dept = data);
  }
  // POST dept
  onSubmit() {
    this._PostDeptService.addDept(this.passdept)
      .subscribe(
        data => this._GetDeptService.getDeptData()
          .subscribe(data => this.dept = data),
        error => console.error('Error!', error)
      );
  }
  // PUT
  edit(id: number): any {
    this._PutDeptService.editDept(id, this.passdept)
      .subscribe(
        data => this._GetDeptService.getDeptData()
          .subscribe(data => this.dept = data),
        error => console.error('Error!', error)
      );
  }
  // DELETE
  delete(id: number): void {
    this._DelDeptService.delDept(id)
      .subscribe(
        _ => this.dept = this.dept.filter(department => department.DepartmentId !== id),
        error => console.log('error', error)
      )
  }
}
