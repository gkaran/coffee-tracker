import {NO_ERRORS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CoffeeService} from '../coffee.service';
import {asyncData} from '../test-utils';

import {UserDashboardComponent} from './user-dashboard.component';

describe('UserDashboardComponent', () => {
  let component: UserDashboardComponent;
  let fixture: ComponentFixture<UserDashboardComponent>;

  const coffeeServiceSpy = jasmine.createSpyObj('CoffeeService', ['getUserUnpaidCoffees']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserDashboardComponent],
      providers: [
        {provide: CoffeeService, useValue: coffeeServiceSpy},
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    coffeeServiceSpy.getUserUnpaidCoffees.and.returnValue(asyncData(10));
    fixture = TestBed.createComponent(UserDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
