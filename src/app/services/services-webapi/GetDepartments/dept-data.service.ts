import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GDepartments, PSDepartments } from '../../../models/queueing_models';

@Injectable({
  providedIn: 'root'
})
export class DeptDataService {
  // web api string
  private _url: string = "";

  //instantiate ng http client
  constructor(private http: HttpClient) { }
  
  getDeptData(): Observable<GDepartments[]>{
    return this.http.get<GDepartments[]>('http://192.168.100.16:50870/api/GetDepartments');
  }

  addDept(dept: PSDepartments) {
    return this.http.post('http://192.168.100.16:50870/api/PostDepartment', dept);
  }

  editDept(id: number, dept: PSDepartments) {
    // ginamit yung id para pang determine kung alin iuupdate
    return this.http.put('http://192.168.100.16:50870/api/PutDepartment' + '/' + id, dept);
  }

  delDept(id: number) {
    return this.http.delete('http://192.168.100.16:50870/api/DeleteDepartment' + '/' + id);
  }
}

