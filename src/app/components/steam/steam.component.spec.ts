import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteamComponent } from './steam.component';

describe('SteamComponent', () => {
  let component: SteamComponent;
  let fixture: ComponentFixture<SteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SteamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
