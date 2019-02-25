import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode'; //QR Code Generator
import { FormsModule } from '@angular/forms'; //Needed for forms
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { MonitorDisplayComponent } from './monitor-display/monitor-display.component'

import { AppComponent } from './app.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MaintenanceComponent } from './admin/maintenance/maintenance.component';
import { QueueControlComponent } from './teller/queue-control/queue-control.component';
import { LoginComponent } from './home/login/login.component';
import { AapiTestingComponent } from './aapi-testing/aapi-testing.component';

import { AccountSettingsAdminComponent } from './admin/account-settings-admin/account-settings-admin.component';
import { AccountSettingsTellerComponent } from './teller/account-settings-teller/account-settings-teller.component';
import { ReportsComponent } from './admin/reports/reports.component';


@NgModule({ 
  declarations: [
    AppComponent,
    DashboardComponent,
    MaintenanceComponent,
    QueueControlComponent,
    LoginComponent,
    AapiTestingComponent,
    AccountSettingsAdminComponent,
    AccountSettingsTellerComponent,
    ReportsComponent,
    MonitorDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QRCodeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
