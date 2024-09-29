import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityManagerUpdateComponent } from './activity-manager-update.component';

describe('ActivityManagerUpdateComponent', () => {
  let component: ActivityManagerUpdateComponent;
  let fixture: ComponentFixture<ActivityManagerUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityManagerUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivityManagerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
