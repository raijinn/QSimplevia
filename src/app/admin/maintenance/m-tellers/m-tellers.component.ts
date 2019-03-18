import { Component, OnInit } from '@angular/core';
import { PostTeller } from 'src/app/models/queueing_models';
import { PostTellerService } from '../../../services/services-webapi/Post/post-teller.service';
import { GetTellerService } from '../../../services/services-webapi/GetTeller/get-teller.service';

@Component({
  selector: 'app-m-tellers',
  templateUrl: './m-tellers.component.html',
  styleUrls: ['./m-tellers.component.css']
})
export class MTellersComponent implements OnInit{

  public anyTeller: any [];

  public passTeller = new PostTeller('','','','','','');
  
  
  constructor(private _GetTellerServices: GetTellerService, private _PostTellerServices: PostTellerService){ } 

  ngOnInit() {
    // GET
    this._GetTellerServices.getTellerData()
      .subscribe(data => this.anyTeller = data);
  }

  onSubmit() {
    this._PostTellerServices.addTeller(this.passTeller)
      .subscribe(
        data => this._GetTellerServices.getTellerData()
          .subscribe(data => this.anyTeller = data),
        error => console.error('Error!', error)
      );
  }
}


