import {NO_ERRORS_SCHEMA, Component} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CoffeeService} from '../coffee.service';
import {asyncData} from '../test-utils';

import {UserDashboardComponent} from './user-dashboard.component';
import {AuthService} from '../services/auth.service';

describe('UserDashboardComponent', () => {
  let component: UserDashboardComponent;
  let fixture: ComponentFixture<UserDashboardComponent>;

  const coffeeServiceSpy = jasmine.createSpyObj('CoffeeService', ['getUserUnpaidCoffees']);
  const authServiceSpy = jasmine.createSpyObj('AuthService', ['logout']);

  @Component({selector: 'app-add-coffee-btn', template: ''})
  class AddCoffeeStubComponent {}

  @Component({selector: 'app-pay-coffee-btn', template: ''})
  class PayCoffeeStubComponent {}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserDashboardComponent,
        AddCoffeeStubComponent,
        PayCoffeeStubComponent
      ],
      providers: [
        {provide: CoffeeService, useValue: coffeeServiceSpy},
        {provide: AuthService, useValue: authServiceSpy}
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
