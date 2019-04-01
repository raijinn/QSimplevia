import { Component, OnInit } from '@angular/core';
import { PostTeller } from 'src/app/models/queueing_models';
import { PostTellerService } from '../../../services/services-webapi/Post/post-teller.service';
import { GetTellerService } from '../../../services/services-webapi/GetTeller/get-teller.service';
import { PutTellerService } from '../../../services/services-webapi/PutTeller/put-teller.service';
import { DelTellerService } from '../../../services/services-webapi/DeleteTeller/del-teller.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-m-tellers',
  templateUrl: './m-tellers.component.html',
  styleUrls: ['./m-tellers.component.css']

})

export class MTellersComponent implements OnInit{

  //public maintenance = "teller"; 
  public anyTeller: any [];
  public passTeller = new PostTeller('','','','','','');

  public tableid: number;
    
  constructor(private _GetTellerServices: GetTellerService, private _PostTellerServices: PostTellerService
    , private _PutTellerService: PutTellerService, private _DelTellerService: DelTellerService){ } 

  ngOnInit() {
    // GET
    //this._GetTellerServices.getUser();
    this._GetTellerServices.getTellerData()
       .subscribe(data => this.anyTeller = data);
  }

  throwId(id: number) {
    this.tableid = id;=> this.anyTeller = data),
        error => console.e
  }
  
  onSubmit(tellerForm:NgForm) {
    //    this._PostTellerServices.addTeller(this.passTeller)

    this._PostTellerServices.addTeller(this.passTeller)
      .subscribe(
        data => this._GetTellerServices.getTellerData()
          .subscribe(data rror('Error!', error)
      );
      tellerForm.resetForm();
  }

  //PUT AND DELETE FUNCTION

  //PUT
  edit(id: number): any {
    this._PutTellerService.editTeller(this.tableid, this.passTeller)
      .subscribe(
        data => this._GetTellerServices.getTellerData()
          .subscribe(data => this.anyTeller = data),
        error => console.error('Error!', error)
      );
  }
  // DELETE
  delete(id: number): void {
    this._DelTellerService.delTeller(id)
      .subscribe(
        _ => this.anyTeller = this.anyTeller.filter(teller => teller.UserId !== id),
        error => console.log('Error!', error)
        //error to Error!
      )
  }
}


