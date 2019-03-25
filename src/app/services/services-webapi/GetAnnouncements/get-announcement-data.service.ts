import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GAnnouncements } from '../../../models/queueing_models';

@Injectable({
  providedIn: 'root'
})
export class GetAnnouncementDataService {

  constructor(private http: HttpClient) { }

  getAnnouncement(): Observable<GAnnouncements[]>{
    return this.http.get<GAnnouncements[]>('http://192.168.100.16:50870/api/GetEvents');
  }
}
