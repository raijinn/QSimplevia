import { Component, OnInit } from '@angular/core';
import { GetAnnouncementDataService, } from '../../../services/services-webapi/GetAnnouncements/get-announcement-data.service'
// data model
import { NgForm } from '../../../../../node_modules/@angular/forms';


@Component({
  selector: 'app-m-announcements',
  templateUrl: './m-announcements.component.html',
  styleUrls: ['./m-announcements.component.css']
})
export class MAnnouncementsComponent implements OnInit {
  // pass this along with the form inputs
  _eventType = false;
  //data model for get?x  
  public announcements: any = [];
  // data model for post/put? 
  // public passAnnounce = new PSAnnouncements('', false,'');

  // [start] file preview
  // imgURL contains the converted base64string
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
      .subscribe(data => this.announcements = data)
  }

  resetForm(form? : NgForm){
    if(form != null)
    form.resetForm();
    this._GetAnnounceService.passAnnounceForm = {
      Description: '',
      EventType: false,
      Image: ''
    }
  }

  onSubmit(form: NgForm) {
    var index = this.imgURL.indexOf(',');
    var base64str
    form.value.EventType = false;
    form.value.Image = 
    this._GetAnnounceService.addAnnouncement(form.value)
      .subscribe(
        data => this._GetAnnounceService.getAnnouncement()
          .subscribe(data => this.announcements = data),
        error => console.error('Error!', error)
      );
  }

}

