import { TestBed } from '@angular/core/testing';

import {CarService } from './details.service';

describe('CarDetailsService', () => {
  let service: CarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
