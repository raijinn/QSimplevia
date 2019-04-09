import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  constructor(private tellerservice: TellerDataService, private toastr: ToastrService) { }

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
  }
}
