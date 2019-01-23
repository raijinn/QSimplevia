import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegiFormComponent } from './components/regi-form/regi-form.component';
import { Trans1Component } from './components/trans1/trans1.component';
import { Trans2Component } from './components/trans2/trans2.component';
import { MonitorDesignComponent } from './components/monitor-design/monitor-design.component';


const routes: Routes = [
  { path: 'monitor-design', component: MonitorDesignComponent},
  { path: 'regi-form', component: RegiFormComponent },
  { path: 'trans1', component: Trans1Component },
  { path: 'trans2', component: Trans2Component},
  { path: '', redirectTo: 'regi-form', pathMatch: 'full'}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
