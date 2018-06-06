import { TestBed, async, inject } from '@angular/core/testing';

import { NonAuthedGuard } from './non-authed.guard';

describe('NonAuthedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NonAuthedGuard]
    });
  });

  it('should ...', inject([NonAuthedGuard], (guard: NonAuthedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
