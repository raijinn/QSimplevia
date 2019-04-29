import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TDashNum, TDashDate } from '../../../models/queueing_models';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {
  readonly tempIP = "http://localhost:50870/api";
  // readonly tempIP = "http://192.168.100.16:50870/api";

  constructor(private http: HttpClient) { }
  getDaily(): Observable<TDashNum[]> {
    return this.http.get<TDashNum[]>(this.tempIP + '/GetDailyTrans');
  }
  getWeekly(day: TDashDate) {
    return this.http.post(this.tempIP + '/GetWeeklyTrans', day);
  }
  getMonthly(day: TDashDate) {
    return this.http.post(this.tempIP + '/GetMonthlyTrans', day);
  }
  getAllTimeTotal(): Observable<TDashNum[]> {
    return this.http.get<TDashNum[]>(this.tempIP + '/GetTotalTrans');
  }
}
