import { TestBed, inject } from '@angular/core/testing';
import {AngularFirestore} from 'angularfire2/firestore';
import {of} from 'rxjs';

import { CoffeeService } from './coffee.service';
import {AuthService} from './services/auth.service';
import {asyncData} from './test-utils';

describe('CoffeeService', () => {

  class AngularFirestoreMock {
    collection = () => asyncData([]);
  }

  class AuthServiceMock {
    user$ = of({});
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CoffeeService,
        {provide: AngularFirestore, useClass: AngularFirestoreMock},
        {provide: AuthService, useClass: AuthServiceMock}
      ]
    });
  });

  it('should be created', inject([CoffeeService], (service: CoffeeService) => {
    expect(service).toBeTruthy();
  }));
});
