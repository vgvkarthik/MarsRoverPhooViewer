import { TestBed, inject } from '@angular/core/testing';

import { MarsphotoviewerService } from './marsphotoviewer.service';

describe('MarsphotoserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarsphotoviewerService]
    });
  });

  it('should be created', inject([MarsphotoviewerService], (service: MarsphotoviewerService) => {
    expect(service).toBeTruthy();
  }));
});
