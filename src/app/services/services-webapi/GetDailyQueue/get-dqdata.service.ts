import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GDailyQueue } from '../../../models/queueing_models';

@Injectable({
  providedIn: 'root'
})
export class GetDQdataService {
  // web server string
<<<<<<< HEAD
  private _url: string = "http://192.168.100.16:50870/api/GetWebDailyQueue";
=======
  private _url: string = "http://192.168.100.16:50870/api/GetDailyQueue";
>>>>>>> 69004860694ba5576e1e1f7df3a11922f76d0d72

  //instantiate ng http client
  constructor(private http: HttpClient) { }

  // eto yung mismong fetch ng db
  getdailyqData(): Observable<GDailyQueue[]>{
      return this.http.get<GDailyQueue[]>(this._url);
  }
}
