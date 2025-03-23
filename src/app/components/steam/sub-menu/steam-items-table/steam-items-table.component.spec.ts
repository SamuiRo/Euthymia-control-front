import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteamItemsTableComponent } from './steam-items-table.component';

describe('SteamItemsTableComponent', () => {
  let component: SteamItemsTableComponent;
  let fixture: ComponentFixture<SteamItemsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SteamItemsTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SteamItemsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
