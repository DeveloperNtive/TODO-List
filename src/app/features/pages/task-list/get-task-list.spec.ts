import { TestBed } from '@angular/core/testing';

import { GetTaskList } from './get-task-list';

describe('GetTaskList', () => {
  let service: GetTaskList;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTaskList);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
