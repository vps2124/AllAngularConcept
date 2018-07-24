import { TestBed, inject } from '@angular/core/testing';

import { FlightticketService } from './flightticket.service';

describe('FlightticketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlightticketService]
    });
  });

  it('should be created', inject([FlightticketService], (service: FlightticketService) => {
    expect(service).toBeTruthy();
  }));
});
