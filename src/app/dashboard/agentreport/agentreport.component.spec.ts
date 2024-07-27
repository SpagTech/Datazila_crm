import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentreportComponent } from './agentreport.component';

describe('AgentreportComponent', () => {
  let component: AgentreportComponent;
  let fixture: ComponentFixture<AgentreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgentreportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
