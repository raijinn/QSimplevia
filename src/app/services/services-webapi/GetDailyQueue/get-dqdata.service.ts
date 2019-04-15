import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GDailyQueue } from '../../../models/queueing_models';

@Injectable({
  providedIn: 'root'
})
export class GetDQdataService {
  // web server string
  private _url: string = "http://localhost:50870/api/GetWebDailyQueue";
  // private _url: string = "http://192.168.100.16:50870/api/GetWebDailyQueue";
 
  //instantiate ng http client
  constructor(private http: HttpClient) { }

  // eto yung mismong fetch ng db
  getdailyqData(): Observable<GDailyQueue[]>{
      return this.http.get<GDailyQueue[]>(this._url);
  }
}
