import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgentRegisterModalComponent } from '../agent-register-modal/agent-register-modal.component';

@Component({
  selector: 'app-agentregister',
  templateUrl: './agentregister.component.html',
  styleUrls: ['./agentregister.component.css']
})
export class AgentregisterComponent {
  fromDate: any;
  toDate: any;
  selectedTeam: any;
  teams: any[] = ['Team A', 'Team B', 'Team C']; // Example teams
  filteredAgents: any[] = []; // Example data

  constructor(private dialog: MatDialog) {}

  filterAgents() {
    throw new Error('Method not implemented.');
  }

  openModal() {
    const dialogRef = this.dialog.open(AgentRegisterModalComponent, {
      width: '400px',
      position: { top: '10%' },  
      data: {}
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('New agent data:', result);
        // Handle the new agent data (e.g., add to the list of agents)
      }
    });
  }
  
}
