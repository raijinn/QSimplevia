import { Component, OnInit } from '@angular/core';
import { GetAnnouncementDataService } from '../../../services/services-webapi/GetAnnouncements/get-announcement-data.service';
// data model
import { PSAnnouncements } from '../../../models/queueing_models';
import { NgForm } from '../../../../../node_modules/@angular/forms';

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

  constructor(private AnnounceService: GetAnnouncementDataService) { }

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
    this.resetForm(form)
  }

  edit(form: NgForm) {
    form.value.EventType = true;
    this.AnnounceService.editAnnouncement(this.eventId, form.value)
      .subscribe(
        data => this.AnnounceService.getAnnouncement()
          .subscribe(data => this.events = data.filter(events => events.EventType !== false)),
        error => console.error('Error!', error)
      );
    this.resetForm(form)
  }
  delete(id: number): void {
    this.AnnounceService.delAnnouncement(id)
      .subscribe(
        _ => this.events = this.events.filter(events => events.EventId !== id),
        error => console.log('error', error)
      )
  }
}
