import {NO_ERRORS_SCHEMA} from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Router} from '@angular/router';
import {of} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {asyncData} from '../test-utils';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  class AuthServiceMock {
    user$ = of({});
    loginWithGoogle = () => asyncData({});
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers:[
        {provide: AuthService, useCLass: AuthServiceMock},
        {provide: Router, useValue: routerSpy}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
