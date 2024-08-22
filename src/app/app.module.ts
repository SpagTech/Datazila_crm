import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './auth/adminlogin/adminlogin.component';
import { TeamloginComponent } from './auth/teamlogin/teamlogin.component';
import { AgentregisterComponent } from './dashboard/agentregister/agentregister.component';
import { AgentreportComponent } from './dashboard/agentreport/agentreport.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { TeamreportComponent } from './dashboard/teamreport/teamreport.component';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';
import { AuthGuard } from './auth/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AgentRegisterModalComponent } from './dashboard/agent-register-modal/agent-register-modal.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { TeamwiseComponent } from './dashboard/teamwise/teamwise.component';
import { TeamDashboardComponent } from './team_dashboard/team-dashboard/team-dashboard.component';
import { TeamsidenaveComponent } from './team_dashboard/teamsidenave/teamsidenave.component';
import { TeamwisereportComponent } from './team_dashboard/teamwisereport/teamwisereport.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    TeamloginComponent,
    AgentregisterComponent,
    AgentRegisterModalComponent,
    AgentreportComponent,
    DashboardComponent,
    HomeComponent,
    TeamreportComponent,
    SidenavComponent,
    TeamwiseComponent,
    TeamDashboardComponent,
    TeamsidenaveComponent,
    TeamwisereportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
