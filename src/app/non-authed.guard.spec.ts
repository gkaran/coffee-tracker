import { TestBed, async, inject } from '@angular/core/testing';
import {Router} from '@angular/router';

import { NonAuthedGuard } from './non-authed.guard';
import {AuthService} from './services/auth.service';

const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

describe('NonAuthedGuard', () => {

  let authServiceStub: Partial<AuthService>;

  beforeEach(() => {
    authServiceStub = {};
    TestBed.configureTestingModule({
      providers: [
        NonAuthedGuard,
        {provide: AuthService, useValue: authServiceStub},
        {provide: Router, userValue: routerSpy}
      ]
    });
  });

  it('should ...', inject([NonAuthedGuard], (guard: NonAuthedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
