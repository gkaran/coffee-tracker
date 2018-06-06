import { TestBed, async, inject } from '@angular/core/testing';

import { AuthedGuard } from './authed.guard';
import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';

const routerSpy = jasmine.createSpyObj('Royter', ['navigate']);

describe('AuthedGuard', () => {

  let authServiceStub: Partial<AuthService>;

  beforeEach(() => {
    authServiceStub = {};

    TestBed.configureTestingModule({
      providers: [
        AuthedGuard,
        {provide: AuthService, useValue: authServiceStub},
        {provide: Router, userValue: routerSpy}
      ],
    });
  });

  it('should ...', inject([AuthedGuard], (guard: AuthedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
