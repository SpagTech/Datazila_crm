// agent-register-modal.component.ts
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-agent-register-modal',
  templateUrl: './agent-register-modal.component.html',
  styleUrls: ['./agent-register-modal.component.css']
})
export class AgentRegisterModalComponent {
  agentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AgentRegisterModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.agentForm = this.fb.group({
      agentName: ['', Validators.required],
      agentId: ['', Validators.required],
      joiningDate: ['', Validators.required],
      teamName: ['', Validators.required]
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onRegister(): void {
    if (this.agentForm.valid) {
      this.dialogRef.close(this.agentForm.value);
    }
  }
}
