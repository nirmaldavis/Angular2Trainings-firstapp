/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MathserviceService } from './mathservice.service';

describe('MathserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MathserviceService]
    });
  });

  it('should ...', inject([MathserviceService], (service: MathserviceService) => {
    expect(service).toBeTruthy();
  }));
});
