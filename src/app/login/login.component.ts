import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginServiceService } from '../services/services-login/login-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Users } from '../models/queueing_models';

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
    document.body.style.marginLeft = "0%";
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
      IsAdmin: null,
      DepartmentId: null
    }
  }

  onSubmit(form: NgForm) {
    this.service.postLogin(form.value).subscribe(res => {
      this._list = res as Users[];
      if (this._list.length < 1) {
        this.toastr.error('Email or Password is incorrect', 'Login Failed');
      }
      else if (this._list[0].IsAdmin === false) {
        this.toastr.error('You are not an administrator', 'Access Denied');
      }
      else {
        this.toastr.success('Welcome, ' + this._list[0].Username, 'Log In Success');
        this._router.navigate(['/dashboard']);  
        localStorage.setItem('CurrentUser', JSON.stringify(this._list));
      }
      this.resetForm()
    });
  }

}









