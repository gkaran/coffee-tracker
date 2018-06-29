import {inject, TestBed} from '@angular/core/testing';
import {AngularFireAuth} from 'angularfire2/auth';

import {AuthService} from './auth.service';

xdescribe('AuthService', () => {

  class AngularFireAuthSpy {

  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        {provide: AngularFireAuth, useClass: AngularFireAuthSpy}
      ]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
