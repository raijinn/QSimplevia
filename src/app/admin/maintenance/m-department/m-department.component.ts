import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../../../node_modules/@angular/forms';
import { DeptDataService } from '../../../services/services-webapi/GetDepartments/dept-data.service';
import { GetDQdataService } from '../../../services/services-webapi/GetDailyQueue/get-dqdata.service';
import { ReportsDataService } from '../../../services/services-webapi/GetReports/reports-data.service';
//data model
import { PSDepartments } from '../../../models/queueing_models';

@Component({
  selector: 'app-m-department',
  templateUrl: './m-department.component.html',
  styleUrls: ['./m-department.component.css']
})
export class MDepartmentComponent implements OnInit {

  public dept: any = [];
  // data model for post/put? 
  public passdept = new PSDepartments;
  // var for passing id into modal
  public tableid: number;

  public dt = new Date();
  public dd = String(this.dt.getDate()).padStart(2, '0');
  public mm = String(this.dt.getMonth() + 1).padStart(2, '0'); //January is 0!
  public yyyy = this.dt.getFullYear();
  public today = this.mm + '/' + this.dd + '/' + this.yyyy;
  public current = JSON.parse(localStorage.getItem('CurrentUser'));

  constructor(private _DeptService: DeptDataService, private _DQService: GetDQdataService, private _ReportService: ReportsDataService) { }
  ngOnInit() {
    // GET
    this._DeptService.getDeptData()
      .subscribe(data => this.dept = data);
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
  }
  throwId(id: number) {
    this.tableid = id;
  }
  // POST dept
  onSubmit(DeptForm: NgForm) {
    this._DeptService.addDept(this.passdept)
      .subscribe(
        data => this._DeptService.getDeptData()
          .subscribe(data => this.dept = data),
        error => console.error('Error!', error)
      );
    var audit = {
      UserId: this.current[0].UserId,
      UserActivity: 'Added a department: ' + DeptForm.value.DepartmentName,
      CreatedAt: this.today
    }
    this._ReportService.postTrail(audit).subscribe(data => this._ReportService.getTrail());
    this.resetForm(DeptForm);
  }
  // PUT
  edit(): any {
    this._DeptService.editDept(this.tableid, this.passdept)
      .subscribe(
        data => this._DeptService.getDeptData()
          .subscribe(data => this.dept = data),
        error => console.error('Error!', error)
      );
    var audit = {
      UserId: this.current[0].UserId,
      UserActivity: 'Edited a department: ' + this.passdept.DepartmentName + ' \nDeptID: ' + this.tableid,
      CreatedAt: this.today
    }
    this._ReportService.postTrail(audit).subscribe(data => this._ReportService.getTrail());
  }
  // DELETE
  delete(id: number): void {
    this._DeptService.delDept(id)
      .subscribe(
        _ => this.dept = this.dept.filter(department => department.DepartmentId !== id),
        error => console.log('error', error)
      )
    var audit = {
      UserId: this.current[0].UserId,
      UserActivity: 'Deleted an announcement: ' + 'EventID: ' + id,
      CreatedAt: this.today
    }
    this._ReportService.postTrail(audit).subscribe(data => this._ReportService.getTrail());
  }
}
