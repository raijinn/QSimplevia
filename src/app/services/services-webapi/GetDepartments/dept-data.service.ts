import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GDepartments, PSDepartments } from '../../../models/queueing_models';

@Injectable({
  providedIn: 'root'
})
export class DeptDataService {

  readonly tempIP = "http://localhost:50870/api";
  //instantiate ng http client
  constructor(private http: HttpClient) { }
  
  getDeptData(): Observable<GDepartments[]>{
    return this.http.get<GDepartments[]>(this.tempIP + '/GetDepartments');
  }

  addDept(dept: PSDepartments) {
    return this.http.post(this.tempIP + '/PostDepartment', dept);
  }

  editDept(id: number, dept: PSDepartments) {
    // ginamit yung id para pang determine kung alin iuupdate
    return this.http.put(this.tempIP + '/PutDepartment' + '/' + id, dept);
  }

  delDept(id: number) {
    return this.http.delete(this.tempIP + '/DeleteDepartment' + '/' + id);
  }
}

