import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReportsDataService } from '../../services/services-webapi/GetReports/reports-data.service';
import { TellerDataService } from '../../services/services-webapi/GetTellers/teller-data.service';
import { Users } from '../../models/queueing_models';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-account-settings-admin',
  templateUrl: './account-settings-admin.component.html',
  styleUrls: ['./account-settings-admin.component.css']
})
export class AccountSettingsAdminComponent implements OnInit {

  current = JSON.parse(localStorage.getItem('CurrentUser'));

  UserId = this.current[0].UserId;
  Username = this.current[0].Username;
  Password = this.current[0].Password;
  FName = this.current[0].FName;
  MName = this.current[0].MName;
  LName = this.current[0].LName;
  Email = this.current[0].Email;

  public dt = new Date();
  public dd = String(this.dt.getDate()).padStart(2, '0');
  public mm = String(this.dt.getMonth() + 1).padStart(2, '0'); //January is 0!
  public yyyy = this.dt.getFullYear();
  public today = this.mm + '/' + this.dd + '/' + this.yyyy;

  //two-way bind variable
  public admin = new Users

  public adminAcc = {
    FName: this.FName,
    MName: this.MName,
    LName: this.LName,
    Email: this.Email,
    Username: this.Username,
    Password: this.Password,
  }

  constructor(private tellerservice: TellerDataService, private toastr: ToastrService, private _ReportService: ReportsDataService) { }

  ngOnInit() {

  }

  onSubmit(admin: NgForm) {
    console.log(this.UserId);
    admin.value.IsAdmin = true;
    admin.value.DepartmentId = null;
    this.tellerservice.editTeller(this.UserId, admin.value)
      .subscribe(res => {
        this.toastr.success('Account Updated');
        localStorage.setItem('CurrentUser', admin.value);
        console.log(admin.value);
      }),
      error => console.error('Error!', error)
    var audit = {
      UserId: this.current[0].UserId,
      UserActivity: 'Edited Personal Account Details for: ' + admin.value.LName + ', ' + admin.value.FName + ' ' + admin.value.MName + '\nAdmin ID: ' + this.UserId,
      CreatedAt: this.today
    }
    this._ReportService.postTrail(audit).subscribe(data => this._ReportService.getTrail());
  }
}
