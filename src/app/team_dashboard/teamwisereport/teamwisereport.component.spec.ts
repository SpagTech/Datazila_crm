import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamwisereportComponent } from './teamwisereport.component';

describe('TeamwisereportComponent', () => {
  let component: TeamwisereportComponent;
  let fixture: ComponentFixture<TeamwisereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamwisereportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamwisereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
