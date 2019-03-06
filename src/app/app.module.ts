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
import { MaintenanceComponent } from './admin/maintenance/maintenance.component';
import { AccountSettingsAdminComponent } from './admin/account-settings-admin/account-settings-admin.component';
import { ReportsComponent } from './admin/reports/reports.component';
// charts
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { AuthService } from './services/services-login/auth';


@NgModule({ 
  declarations: [
    AppComponent,
    DashboardComponent,
    MaintenanceComponent,
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
    ChartsModule,
    MDBBootstrapModule.forRoot()
  ],
  // include all services inside providers for reusability
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
