import { TestBed } from '@angular/core/testing';

import { TaskhttpService } from './taskhttp.service';

describe('TaskhttpService', () => {
  let service: TaskhttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskhttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
