import { TestBed, inject } from '@angular/core/testing';

import { SiblingComponentService } from './sibling-component.service';

describe('SiblingComponentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SiblingComponentService]
    });
  });

  it('should be created', inject([SiblingComponentService], (service: SiblingComponentService) => {
    expect(service).toBeTruthy();
  }));
});
