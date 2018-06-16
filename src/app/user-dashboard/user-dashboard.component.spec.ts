import {BreakpointObserver} from '@angular/cdk/layout';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {asyncData} from '../test-utils';

import {UserDashboardComponent} from './user-dashboard.component';

describe('UserDashboardComponent', () => {
  let component: UserDashboardComponent;
  let fixture: ComponentFixture<UserDashboardComponent>;

  const breakPointObserverSpy = jasmine.createSpyObj('BreakpointObserver', ['observe']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserDashboardComponent],
      providers: [
        {provide: BreakpointObserver, useValue: breakPointObserverSpy},
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    breakPointObserverSpy.observe.and.returnValue(asyncData(false));
    fixture = TestBed.createComponent(UserDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
