import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DeptDataService } from '../../../services/services-webapi/GetDepartments/dept-data.service'
import { TellerDataService } from '../../../services/services-webapi/GetTellers/teller-data.service';
import { ReportsDataService } from '../../../services/services-webapi/GetReports/reports-data.service';
import { Users } from '../../../models/queueing_models';


@Component({
  selector: 'app-m-tellers',
  templateUrl: './m-tellers.component.html',
  styleUrls: ['./m-tellers.component.css']
})

export class MTellersComponent implements OnInit {

  public anyTeller: any = [];
  public passTeller = new Users;

  public depts: any = [];

  public tableid: number;

  public dt = new Date();
  public dd = String(this.dt.getDate()).padStart(2, '0');
  public mm = String(this.dt.getMonth() + 1).padStart(2, '0'); //January is 0!
  public yyyy = this.dt.getFullYear();
  public today = this.mm + '/' + this.dd + '/' + this.yyyy;
  public current = JSON.parse(localStorage.getItem('CurrentUser'));


  constructor(private _DeptService: DeptDataService, private _TellerService: TellerDataService, private _ReportService: ReportsDataService) { }

  ngOnInit() {
    this._DeptService.getDeptData()
      .subscribe(data => this.depts = data);

    this._TellerService.getTeller()
      .subscribe(data => {
        this.anyTeller = data.filter(anyTeller => anyTeller.IsAdmin !== true)
      })
  }

  throwId(id: number) {
    this.tableid = id;
  }


  onSubmit(tellerform: NgForm) {
    tellerform.value.IsAdmin = false;
    var index = tellerform.value.DepartmentId.indexOf(' ');
    var sliceDept = tellerform.value.DepartmentId.slice(0, index)
    tellerform.value.DepartmentId = sliceDept;
    this._TellerService.addTeller(tellerform.value)
      .subscribe(
        data => this._TellerService.getTeller()
          .subscribe(data => this.anyTeller = data.filter(anyTeller => anyTeller.IsAdmin !== true)
          ),
        error => console.error('Error!', error)
      )
    var audit = {
      UserId: this.current[0].UserId,
      UserActivity: 'Added Teller: ' + tellerform.value.LName + ', ' + tellerform.value.FName + ' ' + tellerform.value.MName,
      CreatedAt: this.today
    }
    this._ReportService.postTrail(audit).subscribe(data => this._ReportService.getTrail());
    tellerform.resetForm();
  }

  edit(form: NgForm) {
    form.value.IsAdmin = false;
    var index = form.value.DepartmentId.indexOf(' ');
    var sliceDept = form.value.DepartmentId.slice(0, index)
    form.value.DepartmentId = sliceDept;
    this._TellerService.editTeller(this.tableid, form.value)
      .subscribe(
        data => this._TellerService.getTeller()
          .subscribe(data => this.anyTeller = data.filter(anyTeller => anyTeller.IsAdmin !== true)
          ),
        error => console.error('Error!', error)
      )
    var audit = {
      UserId: this.current[0].UserId,
      UserActivity: 'Edited Teller Details for: ' + form.value.LName + ', ' + form.value.FName + ' ' + form.value.MName + '\nTeller ID: ' + this.tableid, 
      CreatedAt: this.today
    }
    this._ReportService.postTrail(audit).subscribe(data => this._ReportService.getTrail());
    form.resetForm();
  }

  delete(id: number): void {
    this._TellerService.delTeller(id)
      .subscribe(
        _ => this.anyTeller = this.anyTeller.filter(anyTeller => anyTeller.UserId !== id)
      ),
      error => console.error('Error!', error);
    var audit = {
      UserId: this.current[0].UserId,
      UserActivity: 'Deleted an Teller Account: ' + 'Teller ID: ' + id,
      CreatedAt: this.today
    }
    this._ReportService.postTrail(audit).subscribe(data => this._ReportService.getTrail());
  }
}




// var audit = {
//   UserId: this.current[0].UserId,
//   UserActivity: 'Edited Personal Account Details for: ' + admin.value.LName + ', ' + admin.value.FName + ' ' + admin.value.MName + '\nAdmin ID: ' + this.UserId,
//   CreatedAt: this.today
// }