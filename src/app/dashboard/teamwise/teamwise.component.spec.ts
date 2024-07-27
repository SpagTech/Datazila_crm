import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamwiseComponent } from './teamwise.component';

describe('TeamwiseComponent', () => {
  let component: TeamwiseComponent;
  let fixture: ComponentFixture<TeamwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamwiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
