import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// queue-display
import { MonitorDisplayComponent } from './monitor-display/monitor-display.component'
// admin 
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AccountSettingsAdminComponent } from './admin/account-settings-admin/account-settings-admin.component';
import { ReportsComponent } from './admin/reports/reports.component';
import { MDepartmentComponent } from './admin/maintenance/m-department/m-department.component';
import { MNewsComponent } from './admin/maintenance/m-news/m-news.component';
import { MAnnouncementsComponent } from './admin/maintenance/m-announcements/m-announcements.component';
import { MEventsComponent } from './admin/maintenance/m-events/m-events.component';
import { MTellersComponent } from './admin/maintenance/m-tellers/m-tellers.component'

// charts
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './admin/reports/charts/bar-chart/bar-chart.component';
// services
import { AuthGuard } from './services/services-login/guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AccountSettingsAdminComponent,
    ReportsComponent,
    MonitorDisplayComponent,
    BarChartComponent,
    LoginComponent,
    MDepartmentComponent,
    MNewsComponent,
    MAnnouncementsComponent,
    MEventsComponent,
    MTellersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,
    MDBBootstrapModule.forRoot()
  ],
  // include all services inside providers for reusability
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
