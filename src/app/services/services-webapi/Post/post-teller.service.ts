import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostTeller } from 'src/app/models/queueing_models';

@Injectable({
  providedIn: 'root'
})
export class PostTellerService {

  private _url: string = 'http://192.168.100.16:50870/api/Post';

  constructor(private http: HttpClient) { }

  addTeller(anyTeller: PostTeller) {
    return this.http.post(this._url, anyTeller);
  }
}