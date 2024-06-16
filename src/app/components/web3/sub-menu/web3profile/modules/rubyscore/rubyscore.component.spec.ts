import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubyscoreComponent } from './rubyscore.component';

describe('RubyscoreComponent', () => {
  let component: RubyscoreComponent;
  let fixture: ComponentFixture<RubyscoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RubyscoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RubyscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
