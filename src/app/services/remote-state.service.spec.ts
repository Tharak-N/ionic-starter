import { TestBed } from '@angular/core/testing';

import { RemoteStateService } from './remote-state.service';

describe('RemoteStateService', () => {
  let service: RemoteStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoteStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
