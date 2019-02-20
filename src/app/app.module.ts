import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode'; //QR Code Generator
import { FormsModule } from '@angular/forms'; //Needed for forms
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MaintenanceComponent } from './admin/maintenance/maintenance.component';
import { QueueControlComponent } from './teller/queue-control/queue-control.component';
import { AccountSettingsComponent } from './teller/account-settings/account-settings.component';
import { LoginComponent } from './home/login/login.component';
import { AapiTestingComponent } from './aapi-testing/aapi-testing.component';

import { QueueNumService } from './callsWebapi/Queue_Num/queue-num.service'

@NgModule({ 
  declarations: [
    AppComponent,
    DashboardComponent,
    MaintenanceComponent,
    QueueControlComponent,
    AccountSettingsComponent,
    LoginComponent,
    AapiTestingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QRCodeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [QueueNumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
