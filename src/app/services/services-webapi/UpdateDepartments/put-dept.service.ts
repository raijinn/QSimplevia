import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PSDepartments } from '../../../models/queueing_models';

@Injectable({
  providedIn: 'root'
})
export class PutDeptService {
  // web api string
  private _url: string = 'http://192.168.0.104:50870/api/PutDepartment';

  constructor(private http: HttpClient) { }

  editDept(id: number, dept: PSDepartments) {
    // ginamit yung id para pang determine kung alin iuupdate
    return this.http.put(this._url + '/' + id, dept);
  }
}
