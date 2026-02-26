import { TestBed } from '@angular/core/testing';

import { TaskHttpRepository } from './task-http-repository';

describe('TaskHttpRepository', () => {
  let service: TaskHttpRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskHttpRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
