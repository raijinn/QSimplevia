import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TDashNum } from '../../../models/queueing_models';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {
  readonly tempIP = "http://localhost:50870/api";
  // readonly tempIP = "http://192.168.100.16:50870/api";

  constructor(private http: HttpClient) { }
  getDaily(): Observable<TDashNum[]> {
    return this.http.get<TDashNum[]>(this.tempIP + '/GetDailyTrans')
  }
  getWeekly(): Observable<TDashNum[]> {

    return this.http.get<TDashNum[]>(this.tempIP + '/GetWeeklyTrans');
  }
  getMonthly(): Observable<TDashNum[]> {
    return this.http.get<TDashNum[]>(this.tempIP + '/GetMonthlyTrans')
  }
  getAllTimeTotal(): Observable<TDashNum[]> {
    return this.http.get<TDashNum[]>(this.tempIP + '/GetTotalTrans')
  }
}
