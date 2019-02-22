import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { queuedata } from './queuedata';

@Injectable({
  providedIn: 'root'
})

export class QueueNumService {
  // web server string
  private _url: string = "https://api.openweathermap.org/data/2.5/weather?lat=14.32675975&lon=120.90618458021615&appid=ef006e1141bb597afc50c0f9278f33e5";

  // eto yung mismong fetch ng db
  getQueueNames(): Observable<queuedata[]> {
    return this.http.get<queuedata[]>(this._url);
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
