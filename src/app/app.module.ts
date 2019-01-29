import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode'; //QR Code Generator
import { FormsModule }   from '@angular/forms'; //Needed for forms

import { AppComponent } from './app.component';
import { Trans1Component } from './components/trans1/trans1.component';
import { Trans2Component } from './components/trans2/trans2.component';
import { RegiFormComponent } from './components/regi-form/regi-form.component';
import { AppRoutingModule } from './/app-routing.module';
import { MonitorDesignComponent } from './components/monitor-design/monitor-design.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormAngularComponent } from './components/form-angular/form-angular.component';
import { ModaaalComponent } from './components/trans2/modaaal/modaaal.component';



@NgModule({
  declarations: [
    AppComponent,
    Trans1Component,
    Trans2Component,
    RegiFormComponent,
    MonitorDesignComponent,
    DashboardComponent,
    FormAngularComponent,
    ModaaalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QRCodeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
