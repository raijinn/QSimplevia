import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GTeller } from 'src/app/models/queueing_models';

@Injectable({
  providedIn: 'root'
})
export class GetTellerService {

  private _url: string = "http://192.168.100.16:50870/api/GetTeller";

  constructor(private http: HttpClient) { }

  getTellerData(): Observable<GTeller[]>{
    return this.http.get<GTeller[]>(this._url);
  }
}
