import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsidenaveComponent } from './teamsidenave.component';

describe('TeamsidenaveComponent', () => {
  let component: TeamsidenaveComponent;
  let fixture: ComponentFixture<TeamsidenaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamsidenaveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamsidenaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
