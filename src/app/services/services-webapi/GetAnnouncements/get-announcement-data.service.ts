import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GAnnouncements, PSAnnouncements } from '../../../models/queueing_models';

@Injectable({
  providedIn: 'root'
})
export class GetAnnouncementDataService {

  constructor(private http: HttpClient) { }

  getAnnouncement(): Observable<GAnnouncements[]> {
    return this.http.get<GAnnouncements[]>('http://192.168.100.16:50870/api/GetEvents');
  }

  addAnnouncement(announcements: PSAnnouncements) {
    return this.http.post('http://192.168.100.16:50870/api/PostEvent', announcements);
  }

  editAnnouncement(id: number, announcements: PSAnnouncements) {
    return this.http.put('http://192.168.100.16:50870/api/PutEvent' + '/' + id, announcements);
  }

  

  delAnnouncement(id: number) {
    return this.http.delete('http://192.168.100.16:50870/api/DeleteEvent' + '/' + id);
  }
}


// Description: string;
// EventType: boolean;
// Image: Blob;