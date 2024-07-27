import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamloginComponent } from './teamlogin.component';

describe('TeamloginComponent', () => {
  let component: TeamloginComponent;
  let fixture: ComponentFixture<TeamloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
