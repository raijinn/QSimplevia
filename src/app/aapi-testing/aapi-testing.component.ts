import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../services-webapi/GetData/getdata.service';


@Component({
  selector: 'app-aapi-testing',
  templateUrl: './aapi-testing.component.html',
  styleUrls: ['./aapi-testing.component.css']
})
export class AapiTestingComponent implements OnInit {
  // constructor() {}

  // ngOnInit() {

  //employees yung nagrereceive ng data na pwede i-interpolate sa view
  public Dqueues: any = [];
  
  //instantiate ng employee service
  constructor(private _GetDataService: GetdataService) { }

  //subscribe para makuha yung data into employees
  ngOnInit() {
    this._GetDataService.getdailyqData().subscribe(data => this.Dqueues = data);
  }
  
}

//hayaan mo muna