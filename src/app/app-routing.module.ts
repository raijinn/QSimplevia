import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/services-login/guard/auth.guard';

import { LoginComponent } from './login/login.component';

//monitor-display
import { MonitorDisplayComponent } from './monitor-display/monitor-display.component'

// admin-side
import { AccountSettingsAdminComponent } from './admin/account-settings-admin/account-settings-admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MaintenanceComponent } from './admin/maintenance/maintenance.component';
import { ReportsComponent } from './admin/reports/reports.component';

const routes: Routes = [
  { path: 'monitor-design', component: MonitorDisplayComponent },
  { path: 'account-settings-admin', component: AccountSettingsAdminComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'maintenance', component: MaintenanceComponent, canActivate: [AuthGuard] },
  { path: 'reports', component: ReportsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {

}
