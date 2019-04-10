import { Component, OnInit } from '@angular/core';
import { AuditTrailDataService } from '../../services/services-webapi/GetAuditTrail/audit-trail-data.service';
import { ReportsDataService } from '../../services/services-webapi/GetReports/reports-data.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor(private trails: AuditTrailDataService, private reports: ReportsDataService) { }

  ngOnInit() {
    document.body.style.overflowY = 'scroll'; 
  }


}
 