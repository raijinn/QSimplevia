import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/services-login/guard/auth.guard';

import { LoginComponent } from './login/login.component';

//monitor-display
import { MonitorDisplayComponent } from './monitor-display/monitor-display.component'

// admin-side
import { AccountSettingsAdminComponent } from './admin/account-settings-admin/account-settings-admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MAnnouncementsComponent } from './admin/maintenance/m-announcements/m-announcements.component'; // admin-side/maintenance
import { MDepartmentComponent } from './admin/maintenance/m-department/m-department.component'; // admin-side/maintenance
import { MEventsComponent } from './admin/maintenance/m-events/m-events.component'; // admin-side/maintenance
import { MNewsComponent } from './admin/maintenance/m-news/m-news.component'; // admin-side/maintenance
import { MTellersComponent } from './admin/maintenance/m-tellers/m-tellers.component'; // admin-side/maintenance
import { ReportsComponent } from './admin/reports/reports.component';

const routes: Routes = [
  { path: 'monitor-design', component: MonitorDisplayComponent },
  { path: 'account-settings-admin', component: AccountSettingsAdminComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'maintenance/announcements', component: MAnnouncementsComponent, canActivate: [AuthGuard] },
  { path: 'maintenance/departments', component: MDepartmentComponent, canActivate: [AuthGuard] },
  { path: 'maintenance/events', component: MEventsComponent, canActivate: [AuthGuard] },
  { path: 'maintenance/news', component: MNewsComponent, canActivate: [AuthGuard] },
  { path: 'maintenance/tellers', component: MTellersComponent, canActivate: [AuthGuard] },
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
