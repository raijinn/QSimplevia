import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../services/services-login/auth/authentication.service'
import { UserLogin, PostTeller } from '../models/queueing_models';

import { PutTellerService } from '../services/services-webapi/UpdateTeller/put-teller.service';

/** 
 1. imports
 2. constructor
 3. ngOnInit
----
 4. public passlogin
 5. constructor private login
 */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public passlogin = new UserLogin('','',false);
  //public passlogin2
  //public passlogin2 = new PostTeller('','','','','','');

  //put public anyLogin: any [];
  public anyLogin: any [];

  loginForm: FormGroup;
  loading = false;
  submitted = false;    
  returnUrl: string;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private _PutTellerService: PutTellerService
    
    ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  // reset login status
  this.authenticationService.logout();

  // get return url from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
}

// convenience getter for easy access to form fields
get f() { return this.loginForm.controls; }

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.loginForm.invalid) {
      return;
  }

  this.loading = true;
  this.authenticationService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
          data => {
              this.router.navigate([this.returnUrl]);
          },
          error => {
              this.error = error;
              this.loading = false;
          });
}
//register modal
/*
register(){
  this._PutTellerService.addTeller(this.passlogin2)
  .subscribe(
    data => this._PutTellerService.getTellerData()
      .subscribe(data => this.anyLogin = data),
    error => console.error('Error!', error)
  );
} */
}
