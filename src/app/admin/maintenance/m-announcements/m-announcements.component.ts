import { Component, OnInit } from '@angular/core';
import { GetAnnouncementDataService } from '../../../services/services-webapi/GetAnnouncements/get-announcement-data.service'
import { ReportsDataService } from '../../../services/services-webapi/GetReports/reports-data.service';
import { NgForm } from '../../../../../node_modules/@angular/forms';


@Component({
  selector: 'app-m-announcements',
  templateUrl: './m-announcements.component.html',
  styleUrls: ['./m-announcements.component.css']
})
export class MAnnouncementsComponent implements OnInit {
  //data model for get?x  
  public announcements: any = [];
  // var for passing id into modal
  public eventId: number;

  public dt = new Date();
  public dd = String(this.dt.getDate()).padStart(2, '0');
  public mm = String(this.dt.getMonth() + 1).padStart(2, '0'); //January is 0!
  public yyyy = this.dt.getFullYear();
  public today = this.mm + '/' + this.dd + '/' + this.yyyy;
  public current = JSON.parse(localStorage.getItem('CurrentUser'));

  constructor(private _GetAnnounceService: GetAnnouncementDataService, private _ReportService: ReportsDataService) { }

  ngOnInit() {
    this._GetAnnounceService.getAnnouncement()
      .subscribe(data => this.announcements = data.filter(announcements => announcements.EventType !== true)
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
    form.value.EventType = false;
    form.value.Date = "00:00:00";
    form.value.Time = "00:00:00";
    form.value.Place = null;
    console.log(form.value);
    this._GetAnnounceService.addAnnouncement(form.value)
      .subscribe(
        data => this._GetAnnounceService.getAnnouncement()
          .subscribe(data => this.announcements = data.filter(announcements => announcements.EventType !== true)),
        error => console.error('Error!', error)
      );
    var audit = {
      UserId: this.current[0].UserId,
      UserActivity: 'Added an announcement: ' + form.value.Description,
      CreatedAt: this.today
    }
    this._ReportService.postTrail(audit).subscribe(data => this._ReportService.getTrail());
    this.resetForm(form)
  }

  edit(form: NgForm) {
    form.value.EventType = false;
    form.value.Date = "00:00:00";
    form.value.Time = "00:00:00";
    this._GetAnnounceService.editAnnouncement(this.eventId, form.value)
      .subscribe(
        data => this._GetAnnounceService.getAnnouncement()
          .subscribe(data => this.announcements = data.filter(announcements => announcements.EventType !== true),
            error => console.error('Error!', error)
          ));
    var audit = {
      UserId: this.current[0].UserId,
      UserActivity: 'Edited an announcement: ' + form.value.Description + ', EventID: ' + this.eventId,
      CreatedAt: this.today
    }
    this._ReportService.postTrail(audit).subscribe(data => this._ReportService.getTrail());
    this.resetForm(form)
  }
  delete(id: number): void {
    this._GetAnnounceService.delAnnouncement(id)
      .subscribe(
        _ => this.announcements = this.announcements.filter(announcement => announcement.EventId !== id),
        error => console.log('error', error)
      )
    var audit = {
      UserId: this.current[0].UserId,
      UserActivity: 'Deleted an Announcement: '+ 'AnnouncementID: ' + id,
      CreatedAt: this.today
    }
    this._ReportService.postTrail(audit).subscribe(data => this._ReportService.getTrail());
  }
}

