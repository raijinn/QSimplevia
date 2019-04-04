import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLogin, PostTeller } from '../../../models/queueing_models';
import { Observable } from 'rxjs';
import { GUsers} from 'src/app/models/queueing_models';


@Injectable({
  providedIn: 'root'
})
export class PutTellerService {

  constructor(private http: HttpClient) { }

  /*
  getTellerData(): Observable<GUsers[]>{
    return this.http.get<GUsers[]>('http://192.168.100.16:50870/api/GetUsers');
  }
  addTeller(anylogin: PostTeller) {
    return this.http.post('http://192.168.100.16:50870/api/PostUser', anylogin);
  }
  */
}
