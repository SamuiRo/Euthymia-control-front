import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonCosmosComponent } from './json-cosmos.component';

describe('JsonCosmosComponent', () => {
  let component: JsonCosmosComponent;
  let fixture: ComponentFixture<JsonCosmosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonCosmosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JsonCosmosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
