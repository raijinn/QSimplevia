import { Component, OnInit } from '@angular/core';
import { GetAnnouncementDataService, } from '../../../services/services-webapi/GetAnnouncements/get-announcement-data.service'
// data model
import { NgForm } from '../../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-m-events',
  templateUrl: './m-events.component.html',
  styleUrls: ['./m-events.component.css']
})
export class MEventsComponent implements OnInit {
  //data model for get?x  
  public announcements: any = [];
  // var for passing id into modal
  public eventId: number;
  // [start] file preview
  // imgURL contains the converted baxse64string
  public imgURL: any;
  public imagePath;
  public message: string;
  preview(files) {
    if (files.length === 0)
      return;
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);   
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }
  // [end] file preview

  constructor(private _GetAnnounceService: GetAnnouncementDataService) { }

  ngOnInit() {
    this._GetAnnounceService.getAnnouncement()
      .subscribe(data => this.announcements = data.filter(announcements => announcements.EventType !== false)
      );
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.imgURL = '';
    this.imagePath = '';
  }

  throwId(id: number, bDisabled) {
    this.eventId = id;
    console.log(id)
  }

  onSubmit(form: NgForm) {
    var index = this.imgURL.indexOf(',');
    var base64str = this.imgURL.slice(index + 1)
    form.value.EventType = true;
    form.value.Image = base64str;
    this._GetAnnounceService.addAnnouncement(form.value)
      .subscribe(
        data => this._GetAnnounceService.getAnnouncement()
          .subscribe(data => this.announcements = data.filter(announcements => announcements.EventType !== false),
            error => console.error('Error!', error)
          ));
    this.resetForm(form)
  }

  edit(form: NgForm) {
    console.log(form.value)
    var index = this.imgURL.indexOf(',');
    var base64str = this.imgURL.slice(index + 1)
    form.value.EventType = true;
    form.value.Image = base64str;
    this._GetAnnounceService.editAnnouncement(this.eventId, form.value)
      .subscribe(
        data => this._GetAnnounceService.getAnnouncement()
          .subscribe(data => this.announcements = data.filter(announcements => announcements.EventType !== false)),
        error => console.error('Error!', error)
      );
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
