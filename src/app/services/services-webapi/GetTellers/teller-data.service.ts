import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GTeller, Users } from '../../../models/queueing_models';

@Injectable({
  providedIn: 'root'
})
export class TellerDataService {

  readonly tempIP = "http://192.168.100.16:50870/api/";

  constructor(private http: HttpClient) { }

  getTeller(): Observable<GTeller[]> {
    return this.http.get<GTeller[]>(this.tempIP + '/GetUsers');
  }

  addTeller(teller: Users) {
    return this.http.post(this.tempIP + '/PostUser', teller);
  }

  editTeller(id: number, teller: Users) {
    return this.http.put(this.tempIP + '/PutUser' + '/' + id, teller);
  }

  delTeller(id: number) {
    return this.http.delete(this.tempIP + '/DeleteUser' + '/' + id);
  }
}
