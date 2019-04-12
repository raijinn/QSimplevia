import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../../../node_modules/@angular/forms';
import { DeptDataService } from '../../../services/services-webapi/GetDepartments/dept-data.service';
import { GetDQdataService } from '../../../services/services-webapi/GetDailyQueue/get-dqdata.service';
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

  constructor(private _DeptService: DeptDataService, private _DQService: GetDQdataService) { }
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
  }
  // DELETE
  delete(id: number): void {
    this._DeptService.delDept(id)
      .subscribe(
        _ => this.dept = this.dept.filter(department => department.DepartmentId !== id),
        error => console.log('error', error)
      )
  }
}
