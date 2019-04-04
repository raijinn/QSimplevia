import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginServiceService } from '../services/services-login/login-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Users } from '../models/queueing_models';


/** 
 1. imports
 2. constructor
 3. ngOnInit
 */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: LoginServiceService,
    private toastr: ToastrService,
    private _router: Router) { }

  ngOnInit() {
    this.resetForm();
    document.body.style.paddingLeft = "";
  }

  _list: Users[];

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      UserId: null,
      Username: '',
      Password: '',
      FName: '',
      MName: '',
      LName: '',
      Email: '',
      IsAdmin: false,
      DepartmentId: null
    }
  }




  onSubmit(form: NgForm) {
    this.service.postLogin(form.value).subscribe(res => {
      this._list = res as Users[];
      if (this._list.length < 1) {
        this.toastr.error('Email or Password is incorrect', 'Login Failed');
      }
      else {
        this.toastr.success('errich u succ', 'Log In Success');
        this._router.navigate(['/dashboard']);
        localStorage.setItem('user-settings', JSON.stringify(this._list));
      }
      this.resetForm()
    });
  }

}









