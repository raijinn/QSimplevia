import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms'; //Needed for forms
import { FullCalendarModule } from 'ng-fullcalendar';

import { MonitorDisplayComponent } from './monitor-display/monitor-display.component'

import { AppComponent } from './app.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MaintenanceComponent } from './admin/maintenance/maintenance.component';
import { AapiTestingComponent } from './aapi-testing/aapi-testing.component';
import { AccountSettingsAdminComponent } from './admin/account-settings-admin/account-settings-admin.component';
import { ReportsComponent } from './admin/reports/reports.component';
// charts
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { LoginComponent } from './login/login.component';

@NgModule({ 
  declarations: [
    AppComponent,
    DashboardComponent,
    MaintenanceComponent,
    AapiTestingComponent,
    AccountSettingsAdminComponent,
    ReportsComponent,
    MonitorDisplayComponent,
    BarChartComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FullCalendarModule,
    ChartsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
