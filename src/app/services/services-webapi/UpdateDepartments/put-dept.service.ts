import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PUDepartments } from '../../../models/queueing_models';

@Injectable({
  providedIn: 'root'
})
export class PutDeptService {
  // web api string
  private _url: string = 'http://192.168.100.16:50870/api/PutDepartment';

  constructor(private http: HttpClient) { }

  editDept(dept: PUDepartments){
    // ginamit yung id para pang determine nung iuupdate
    return this.http.put(this._url + '/' + dept.DepartmentId, dept);
  }
}
