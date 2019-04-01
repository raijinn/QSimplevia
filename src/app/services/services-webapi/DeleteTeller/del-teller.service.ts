import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DelTellerService {

  private _url: string = "http://192.168.100.16:50870/api/DeleteUser";

  constructor(private http: HttpClient) { }

  delTeller(id: number) {
    return this.http.delete(this._url + '/' + id);
  }
}
