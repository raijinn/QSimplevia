import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostTeller} from '../../../models/queueing_models';

@Injectable({
  providedIn: 'root'
})
export class PutTellerService {
  //43.167
  /*
  private _url: string = 'http://192.168.100.16:50870/api/PutUser';

  constructor(private http: HttpClient) { }

  editTeller(id: number, anyTeller: PostTeller) {
    // ginamit yung id para pang determine kung alin iuupdate
    return this.http.put(this._url + '/' + id, anyTeller);
  } */
}
