import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GUsers} from 'src/app/models/queueing_models';
import { PostTeller } from 'src/app/models/queueing_models';
///import { GTeller } from 'src/app/models/queueing_models';
import { GDepartments } from 'src/app/models/queueing_models'

@Injectable({
  providedIn: 'root'
})
export class GetTellerService {

  private _url: string = "http://192.168.100.16:50870/api/GetUsers";

  readonly tempIP = "http://192.168.100.16:50870/api";


    /* JERIC METHOD
    list : GUsers[];

    rootUrl : string = "http://192.168.100.16:50870/api/GetUsers"; */

    /*
  constructor(private http: HttpClient) {
   }

   
  getTellerData(): Observable<GUsers[]>{
    return this.http.get<GUsers[]>(this._url);
  }

  */

    /* JERIC METHOD
    getUser(){
      return this.http.get(this.rootUrl)
      .toPromise().then(res => this.list  = res as GUsers[]);
    } */


  //instantiate ng http client
  constructor(private http: HttpClient) { }
  
  getTellerData(): Observable<GUsers[]>{
    return this.http.get<GUsers[]>('http://192.168.100.16:50870/api/GetUsers');
  }
  getDeptData(): Observable<GDepartments[]>{
    return this.http.get<GDepartments[]>(this.tempIP + '/GetDepartments');
  }
  addTeller(anyTeller: PostTeller) {
    return this.http.post('http://192.168.100.16:50870/api/PostUser', anyTeller);
  }

  editTeller(id: number, anyTeller: PostTeller) {
    // ginamit yung id para pang determine kung alin iuupdate
    return this.http.put('http://192.168.100.16:50870/api/PutUser' + '/' + id, anyTeller);
  }

  delTeller(id: number) {
    return this.http.delete('http://192.168.100.16:50870/api/DeleteUser' + '/' + id);
  }
}

