import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcadeOverviewComponent } from './arcade-overview.component';

describe('ArcadeOverviewComponent', () => {
  let component: ArcadeOverviewComponent;
  let fixture: ComponentFixture<ArcadeOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArcadeOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArcadeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
