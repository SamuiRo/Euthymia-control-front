import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityManagerComponent } from './activity-manager.component';

describe('ActivityManagerComponent', () => {
  let component: ActivityManagerComponent;
  let fixture: ComponentFixture<ActivityManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivityManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
