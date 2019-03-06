import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AapiTestingComponent } from './aapi-testing/aapi-testing.component';
import { LoginComponent } from './login/login.component';

//monitor-display
import { MonitorDisplayComponent } from './monitor-display/monitor-display.component'

// admin-side
import { AccountSettingsAdminComponent } from './admin/account-settings-admin/account-settings-admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MaintenanceComponent } from './admin/maintenance/maintenance.component';
import { ReportsComponent } from './admin/reports/reports.component';

const routes: Routes = [
  { path: 'aapi-testing', component: AapiTestingComponent },
  { path: 'monitor-design', component: MonitorDisplayComponent },
  { path: 'account-settings-admin', component: AccountSettingsAdminComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'maintenance', component: MaintenanceComponent},
  { path: 'reports', component: ReportsComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
