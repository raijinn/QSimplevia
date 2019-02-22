import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aapi-testing',
  templateUrl: './aapi-testing.component.html',
  styleUrls: ['./aapi-testing.component.css']
})
export class AapiTestingComponent implements OnInit {
  objectKeys = Object.keys
  // employees yung nagrereceive ng data na pwede i-interpolate sa view
  // public queue_names: any = [];
  constructor() {}

  ngOnInit() {

  }
  //instantiate ng employee service
  // constructor(private _queuenameService: QueueNumService) { }

  // subscribe para makuha yung data into employees
  // ngOnInit() {
  //   this._queuenameService.getQueueNames()
  //   .subscribe(data => this.queue_names = data);
  // }

}

//hayaan mo muna