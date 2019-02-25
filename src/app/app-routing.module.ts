import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AapiTestingComponent } from './aapi-testing/aapi-testing.component';

import { LoginComponent } from './home/login/login.component';

//monitor-display
import { MonitorDisplayComponent } from './monitor-display/monitor-display.component'

// admin-side
import { AccountSettingsAdminComponent } from './admin/account-settings-admin/account-settings-admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MaintenanceComponent } from './admin/maintenance/maintenance.component';
import { ReportsComponent } from './admin/reports/reports.component';

// teller-side
import { AccountSettingsTellerComponent } from './teller/account-settings-teller/account-settings-teller.component';
import { QueueControlComponent } from './teller/queue-control/queue-control.component';

const routes: Routes = [
  { path: 'aapi-testing', component: AapiTestingComponent },
  { path: 'monitor-design', component: MonitorDisplayComponent },
  { path: 'login', component: LoginComponent },
  { path: 'account-settings-admin', component: AccountSettingsAdminComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'maintenance', component: MaintenanceComponent },
  { path: 'account-settings-teller', component: AccountSettingsTellerComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'queue', component: QueueControlComponent },
  { path: '', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
