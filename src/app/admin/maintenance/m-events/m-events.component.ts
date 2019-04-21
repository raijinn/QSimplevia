import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../../../node_modules/@angular/forms';
import { GetAnnouncementDataService } from '../../../services/services-webapi/GetAnnouncements/get-announcement-data.service';
import { ReportsDataService } from '../../../services/services-webapi/GetReports/reports-data.service';

// data model
import { PSAnnouncements } from '../../../models/queueing_models';

@Component({
  selector: 'app-m-events',
  templateUrl: './m-events.component.html',
  styleUrls: ['./m-events.component.css']
})
export class MEventsComponent implements OnInit {
  //data model for get?x  
  public events: any = [];
  // var for passing id into modal
  public passEvents = new PSAnnouncements;
  public eventId: number;

  public dt = new Date();
  public dd = String(this.dt.getDate()).padStart(2, '0');
  public mm = String(this.dt.getMonth() + 1).padStart(2, '0'); //January is 0!
  public yyyy = this.dt.getFullYear();
  public today = this.mm + '/' + this.dd + '/' + this.yyyy;
  public current = JSON.parse(localStorage.getItem('CurrentUser'));

  constructor(private AnnounceService: GetAnnouncementDataService, private _ReportService: ReportsDataService) { }

  ngOnInit() {
    this.AnnounceService.getAnnouncement()
      .subscribe(data => this.events = data.filter(events => events.EventType !== false)
      );
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();

  }

  throwId(id: number) {
    this.eventId = id;

  }

  onSubmit(form: NgForm) {
    form.value.EventType = true;
    this.AnnounceService.addAnnouncement(form.value)
      .subscribe(
        data => this.AnnounceService.getAnnouncement()
          .subscribe(data => this.events = data.filter(events => events.EventType !== false),
            error => console.error('Error!', error)
          ));
    var audit = {
      UserId: this.current[0].UserId,
      UserActivity: 'Added an Event: ' + form.value.Description,
      CreatedAt: this.today
    }
    this._ReportService.postTrail(audit).subscribe(data => this._ReportService.getTrail());
    this.resetForm(form);
  }

  edit(form: NgForm) {
    form.value.EventType = true;
    this.AnnounceService.editAnnouncement(this.eventId, form.value)
      .subscribe(
        data => this.AnnounceService.getAnnouncement()
          .subscribe(data => this.events = data.filter(events => events.EventType !== false)),
        error => console.error('Error!', error)
      );
    var audit = {
      UserId: this.current[0].UserId,
      UserActivity: 'Edited an Event: ' + form.value.Description+ ' \nEvent ID: ' + this.eventId,
      CreatedAt: this.today
    }
    this._ReportService.postTrail(audit).subscribe(data => this._ReportService.getTrail());
    this.resetForm(form)
  }
  delete(id: number): void {
    this.AnnounceService.delAnnouncement(id)
      .subscribe(
        _ => this.events = this.events.filter(events => events.EventId !== id),
        error => console.log('error', error)
      )
    var audit = {
      UserId: this.current[0].UserId,
      UserActivity:  'Deleted an Event: '+ 'EventID: ' + id,
      CreatedAt: this.today
    }
    this._ReportService.postTrail(audit).subscribe(data => this._ReportService.getTrail());
  }
}
