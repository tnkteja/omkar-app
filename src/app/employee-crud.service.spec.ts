import { TestBed } from '@angular/core/testing';

import { EmployeeCRUDService } from './employee-crud.service';

describe('EmployeeCRUDService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeCRUDService = TestBed.get(EmployeeCRUDService);
    expect(service).toBeTruthy();
  });
});
