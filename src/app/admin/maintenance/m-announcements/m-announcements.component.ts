import { Component, OnInit } from '@angular/core';
import { GetAnnouncementDataService, } from '../../../services/services-webapi/GetAnnouncements/get-announcement-data.service'
// data model
import { NgForm } from '../../../../../node_modules/@angular/forms';
import { empty } from '../../../../../node_modules/rxjs';


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
 
  constructor(private _GetAnnounceService: GetAnnouncementDataService) { }

  ngOnInit() {
    this._GetAnnounceService.getAnnouncement()
      .subscribe(data => this.announcements = data.filter(announcements => announcements.EventType !== true)
      );
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
  }

  throwId(id: number, bDisabled) {
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
    this.resetForm(form)
  }

  edit(form: NgForm) {
    form.value.EventType = false;
    this._GetAnnounceService.editAnnouncement(this.eventId, form.value)
      .subscribe(
        data => this._GetAnnounceService.getAnnouncement()
          .subscribe(data => this.announcements = data.filter(announcements => announcements.EventType !== true),
            error => console.error('Error!', error)
          ));
    this.resetForm(form)
  }
  delete(id: number): void {
    this._GetAnnounceService.delAnnouncement(id)
      .subscribe(
        _ => this.announcements = this.announcements.filter(announcement => announcement.EventId !== id),
        error => console.log('error', error)
      )
  }
}

