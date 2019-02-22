import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GDailyQueue } from './queuedata';

@Injectable({
  providedIn: 'root'
})

export class QueueNumService {
  // web server string
  private _url: string = "http://192.168.100.16:50870/api/GetDailyQueue";

  // eto yung mismong fetch ng db
  getQueueNames(): Observable<GDailyQueue[]> {
    return this.http.get<GDailyQueue[]>(this._url);
  }

  //instantiate ng http client
  constructor(private http: HttpClient) { }

  // // web server string
  // private _url: string = "../../../assets/sampleAPI.json";

  // // eto yung mismong fetch ng db
  // getQueueNames(): Observable<queuedata[]> {
  //   return this.http.get<queuedata[]>(this._url);
  // }
}
