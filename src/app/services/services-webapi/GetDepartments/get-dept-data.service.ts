import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GDepartments } from '../../../models/queueing_models';

@Injectable({
  providedIn: 'root'
})
export class GetDeptDataService {
  // web api string
  private _url: string = "http://192.168.0.104:50870/api/GetDepartments";

  //instantiate ng http client
  constructor(private http: HttpClient) { }
  
  getDeptData(): Observable<GDepartments[]>{
    return this.http.get<GDepartments[]>(this._url);
  }

  
}