import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reports, Audits } from '../../../models/queueing_models';

@Injectable({
  providedIn: 'root'
})
export class ReportsDataService {
  // readonly tempIP = "http://192.168.100.16:50870/api";
  readonly tempIP = "http://localhost:50870/api";

  constructor(private http: HttpClient) { }

  getReports(): Observable<Reports[]>{
    return this.http.get<Reports[]>(this.tempIP + '/GetAllTransactions');
  }
  getTrail(): Observable<Audits[]>{
    return this.http.get<Audits[]>(this.tempIP + '/GetAuditTrail');
  }
}
