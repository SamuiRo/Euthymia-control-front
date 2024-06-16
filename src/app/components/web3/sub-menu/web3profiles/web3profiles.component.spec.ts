import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Web3profilesComponent } from './web3profiles.component';

describe('Web3profilesComponent', () => {
  let component: Web3profilesComponent;
  let fixture: ComponentFixture<Web3profilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Web3profilesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Web3profilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
