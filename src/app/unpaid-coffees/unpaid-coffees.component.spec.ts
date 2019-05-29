import {NO_ERRORS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CoffeeService} from '../coffee.service';

import {UnpaidCoffeesComponent} from './unpaid-coffees.component';

xdescribe('UnpaidCoffeesComponent', () => {
  let component: UnpaidCoffeesComponent;
  let fixture: ComponentFixture<UnpaidCoffeesComponent>;

  const coffeeServiceSpy = jasmine.createSpyObj('CoffeeService', ['getUserDue']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UnpaidCoffeesComponent],
      providers: [
        {provide: CoffeeService, useValue: coffeeServiceSpy}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnpaidCoffeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
