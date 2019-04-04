import { Component, OnInit } from '@angular/core';
import { PostTeller } from 'src/app/models/queueing_models';
import { GetTellerService } from '../../../services/services-webapi/GetTeller/get-teller.service';
import { GetDeptDataService } from '../../../services/services-webapi/GetDepartments/get-dept-data.service';
/*
import { PostTellerService } from '../../../services/services-webapi/Post/post-teller.service';
import { PutTellerService } from '../../../services/services-webapi/PutTeller/put-teller.service';
import { DelTellerService } from '../../../services/services-webapi/DeleteTeller/del-teller.service';
*/
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-m-tellers',
  templateUrl: './m-tellers.component.html',
  styleUrls: ['./m-tellers.component.css']

})

export class MTellersComponent implements OnInit {

  //public maintenance = "teller"; 
  public anyTeller: any[];
  public dept: any = [];
  public passTeller = new PostTeller('', '', '', '', '', '', false, 1);

  public tableid: number;

  constructor(private _GetTellerServices: GetTellerService, private _DeptService: GetDeptDataService) { }

  /*remove from constructor
     private _PostTellerServices: PostTellerService
    , private _PutTellerService: PutTellerService, private _DelTellerService: DelTellerService
  */
  ngOnInit() {
    // GET
    //this._GetTellerServices.getUser();
    this._GetTellerServices.getTellerData()
      .subscribe(data => {
        this.anyTeller = data;

      });

    this._DeptService.getDeptData()
      .subscribe(data => this.dept = data);
  }

  throwId(id: number) {
    this.tableid = id;
  }

  onSubmit(tellerForm: NgForm) {
    tellerForm.value.IsAdmin = false;
    
    //    this._PostTellerServices.addTeller(this.passTeller)
    this._GetTellerServices.addTeller(tellerForm.value)
      .subscribe(
        data => this._GetTellerServices.getTellerData()
          .subscribe(data => this.anyTeller = data),
        error => console.error('Error!', error)
      );
      console.log(tellerForm.value);
    tellerForm.resetForm();

  }

  //PUT AND DELETE FUNCTION
  //this._GetTellerServices.editTeller(this.tableid, this.passTeller)
  //PUT
  edit(upTellerForm: NgForm): any {
    //form.value.IsAdmin = false;
    upTellerForm.value.IsAdmin = false;
    this._GetTellerServices.editTeller(this.tableid, upTellerForm.value)
      .subscribe(
        data => this._GetTellerServices.getTellerData()
          .subscribe(data => this.anyTeller = data),
        error => console.error('Error!', error)
      );
  }
  // DELETE
  // this._GetTellerServices.delTeller(id)
  delete(id: number): void {
    this._GetTellerServices.delTeller(id)
      .subscribe(
        _ => this.anyTeller = this.anyTeller.filter(teller => teller.UserId !== id),
        error => console.log('Error!', error)
        //error to Error!
      )
  }
}


