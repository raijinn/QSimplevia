import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { queuedata } from './queuedata';

@Injectable({
  providedIn: 'root'
})
export class QueueNumService {
  // web server string
  private _url: string = "http://192.168.100.16:59511/api/QueueNumber";

  //instantiate ng http client
  constructor(private http: HttpClient) { }

  // eto yung mismong fetch ng db
  getQueueNames(): Observable<queuedata[]>{
      return this.http.get<queuedata[]>(this._url);
  }
}
