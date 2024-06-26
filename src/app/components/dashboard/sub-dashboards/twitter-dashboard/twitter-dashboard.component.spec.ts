import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterDashboardComponent } from './twitter-dashboard.component';

describe('TwitterDashboardComponent', () => {
  let component: TwitterDashboardComponent;
  let fixture: ComponentFixture<TwitterDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwitterDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwitterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
