import { Component, OnInit } from '@angular/core';
import { GetAnnouncementDataService, } from '../../../services/services-webapi/GetAnnouncements/get-announcement-data.service'
// data model
import { PSAnnouncements } from '../../../models/queueing_models';

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
  public passAnnounce = new PSAnnouncements('', false, '');

  // [start] file preview
  // imgURL contains the converted base64string
  imgURL: any;
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

  onSubmit() {
    this._GetAnnounceService.addAnnouncement(this.passAnnounce)
      .subscribe(
        data => this._GetAnnounceService.getAnnouncement()
          .subscribe(data => this.announcements = data),
        error => console.error('Error!', error)
      );
  }

}
