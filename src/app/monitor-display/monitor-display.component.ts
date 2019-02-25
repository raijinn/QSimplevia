import { Component, OnInit } from '@angular/core';
import { GetDQdataService } from '../services-webapi/GetDailyQueue/get-dqdata.service';

@Component({
  selector: 'app-monitor-display',
  templateUrl: './monitor-display.component.html',
  styleUrls: ['./monitor-display.component.css']
})
export class MonitorDisplayComponent implements OnInit {
  // refresh time
  public dtime: Date = new Date();

  public queues: any = [];

  constructor(private _GetDQDataService: GetDQdataService) {
    setInterval(() => {
      this.dtime = new Date();
    }, 1);
  }

  ngOnInit() {
    this._GetDQDataService.getdailyqData().subscribe(data =>this.queues = data); 
  }
  
}