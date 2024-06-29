import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreasureOverviewComponent } from './treasure-overview.component';

describe('TreasureOverviewComponent', () => {
  let component: TreasureOverviewComponent;
  let fixture: ComponentFixture<TreasureOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreasureOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TreasureOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
