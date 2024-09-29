import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityManagerAddComponent } from './activity-manager-add.component';

describe('ActivityManagerAddComponent', () => {
  let component: ActivityManagerAddComponent;
  let fixture: ComponentFixture<ActivityManagerAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityManagerAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivityManagerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
