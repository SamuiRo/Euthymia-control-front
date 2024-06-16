import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncswapComponent } from './syncswap.component';

describe('SyncswapComponent', () => {
  let component: SyncswapComponent;
  let fixture: ComponentFixture<SyncswapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SyncswapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SyncswapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
