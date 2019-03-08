import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DelDeptService {
  // web api string
  private _url: string = "http://192.168.100.16:50870/api/DeleteDepartment";

  //instantiate ng http client
  constructor(private http: HttpClient) { }


  delDept(id: number) {
    return this.http.delete(this._url + '/' + id);
  }
}