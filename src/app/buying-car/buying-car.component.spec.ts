import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyingCarComponent } from './buying-car.component';

describe('BuyingCarComponent', () => {
  let component: BuyingCarComponent;
  let fixture: ComponentFixture<BuyingCarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyingCarComponent]
    });
    fixture = TestBed.createComponent(BuyingCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
