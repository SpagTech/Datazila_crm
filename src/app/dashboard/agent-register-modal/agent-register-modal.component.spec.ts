import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentRegisterModalComponent } from './agent-register-modal.component';

describe('AgentRegisterModalComponent', () => {
  let component: AgentRegisterModalComponent;
  let fixture: ComponentFixture<AgentRegisterModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgentRegisterModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentRegisterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
