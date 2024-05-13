import { TestBed } from '@angular/core/testing';

import { BuyingCarService } from '../buying-car/buying-car.service';

describe('BuyingCarService', () => {
  let service: BuyingCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyingCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
