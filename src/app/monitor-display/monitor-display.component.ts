import { Component, OnInit } from '@angular/core';
import { GetDQdataService } from '../services/services-webapi/GetDailyQueue/get-dqdata.service';
import { Subscription } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-monitor-display',
  templateUrl: './monitor-display.component.html',
  styleUrls: ['./monitor-display.component.css']
})
export class MonitorDisplayComponent implements OnInit {
  // refresh time
  public dtime: Date = new Date();

  public queues: any = [];

  private dailyQDataSubscription: Subscription

  constructor(private _GetDQDataService: GetDQdataService) {
    setInterval(() => {
      this.dtime = new Date();
      this.dailyQDataSubscription = this._GetDQDataService.getdailyqData()
        .subscribe(
          data => this.queues = data.filter(queues => queues.Status !== 2),
          error => {},
          () => this.dailyQDataSubscription.unsubscribe()
        )
    }, 1000);
  }

  ngOnInit() {
  }

}