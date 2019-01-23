import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Trans1Component } from './components/trans1/trans1.component';
import { Trans2Component } from './components/trans2/trans2.component';
import { RegiFormComponent } from './components/regi-form/regi-form.component';
import { AppRoutingModule } from './/app-routing.module';
import { MonitorDesignComponent } from './components/monitor-design/monitor-design.component';

@NgModule({
  declarations: [
    AppComponent,
    Trans1Component,
    Trans2Component,
    RegiFormComponent,
    MonitorDesignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
