import { TestBed, inject } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculatorService]
    });
  });

  it('should be created', inject([CalculatorService], (service: CalculatorService) => {
    expect(service).toBeTruthy();
  }));

  it('should return addtion of 10 and 2 as  12', inject([CalculatorService], (service: CalculatorService) => {
    expect(service.add(10,2)).toEqual(12);
  }));

  it('should return substraction of 10 and 2 as 8 ', inject([CalculatorService], (service: CalculatorService) => {
    expect(service.sub(10,2)).toEqual(8);
  }));

  it('should return multiplication of 10 and 2 as 20', inject([CalculatorService], (service: CalculatorService) => {
    expect(service.mul(10,2)).toEqual(20);
  }));

  it('should return division of 10 and 2 as 5', inject([CalculatorService], (service: CalculatorService) => {
    expect(service.div(10,2)).toEqual(5);
  }));

  it('should return modulus of 10 and 2 as ', inject([CalculatorService], (service: CalculatorService) => {
    expect(service.mod(10,2)).toEqual(0);
  }));

});
