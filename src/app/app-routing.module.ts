import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './auth/adminlogin/adminlogin.component';
import { TeamloginComponent } from './auth/teamlogin/teamlogin.component';
import { AgentregisterComponent } from './dashboard/agentregister/agentregister.component';
import { AgentreportComponent } from './dashboard/agentreport/agentreport.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { TeamreportComponent } from './dashboard/teamreport/teamreport.component';
import { AuthGuard } from './auth/auth.guard';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';
import { TeamwiseComponent } from './dashboard/teamwise/teamwise.component';
import { TeamDashboardComponent } from './team_dashboard/team-dashboard/team-dashboard.component';
import { TeamsidenaveComponent } from './team_dashboard/teamsidenave/teamsidenave.component';
import { TeamwisereportComponent } from './team_dashboard/teamwisereport/teamwisereport.component';
 

const routes: Routes = [
  { path: '', redirectTo: 'adminlogin', pathMatch: 'full' },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'teamlogin', component: TeamloginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' }, 
      { path: 'sidenav', component: SidenavComponent},
      { path: 'home', component: HomeComponent },
      { path: 'agentregistration', component: AgentregisterComponent },
      { path: 'agentreport', component: AgentreportComponent },
      { path: 'teamreport', component: TeamreportComponent },
      { path: 'teamwise', component: TeamwiseComponent}
    ]
  },
  {
    path: 'team-dashboard',
    component: TeamDashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'teamsidenave', pathMatch: 'full' },
      {path: 'teamsidenave', component:TeamsidenaveComponent},
      {path: 'teamwisereport', component:TeamwisereportComponent}
      // Add more team-specific routes here if necessary
    ]
  },
    
  
  { path: '**', redirectTo: 'adminlogin' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
