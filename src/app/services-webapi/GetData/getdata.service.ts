import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Apijsontest } from '../../../assets/queueing_models';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  // web server string
  private _url: string = "../../../assets/sampleAPI.json";

  //instantiate ng http client
  constructor(private http: HttpClient) { }

  // eto yung mismong fetch ng db
  getdailyqData(): Observable<Apijsontest[]>{
      return this.http.get<Apijsontest[]>(this._url);
  }
}

// sample lang, wag gamitin sa deploy