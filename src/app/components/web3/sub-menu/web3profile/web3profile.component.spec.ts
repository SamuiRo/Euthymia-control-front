import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Web3profileComponent } from './web3profile.component';

describe('Web3profileComponent', () => {
  let component: Web3profileComponent;
  let fixture: ComponentFixture<Web3profileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Web3profileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Web3profileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
