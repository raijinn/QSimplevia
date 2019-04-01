import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GAnnouncements, PSAnnouncements } from '../../../models/queueing_models';

@Injectable({
  providedIn: 'root'
})
export class GetAnnouncementDataService {
  // magkasama na yung events + announcements

  readonly tempIP = "http://192.168.100.16:50870/api";

  passAnnounceForm: PSAnnouncements;

  constructor(private http: HttpClient) { }

  getAnnouncement(): Observable<GAnnouncements[]> {
    return this.http.get<GAnnouncements[]>(this.tempIP + '/GetEvents');
  }

  addAnnouncement(announcements: PSAnnouncements) {
    return this.http.post(this.tempIP + '/PostEvent', announcements);
  }

  editAnnouncement(id: number, announcements: PSAnnouncements) {
    return this.http.put(this.tempIP + '/PutEvent' + '/' + id, announcements);
  }

  delAnnouncement(id: number) {
    return this.http.delete(this.tempIP + '/DeleteEvent' + '/' + id);
  }
}


// Description: string;
// EventType: boolean;
// Image: Blob;