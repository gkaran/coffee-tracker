import {NO_ERRORS_SCHEMA} from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CoffeeService} from '../coffee.service';
import {asyncData} from '../test-utils';

import { MonthlyCoffeesComponent } from './monthly-coffees.component';

describe('MonthlyCoffeesComponent', () => {
  let component: MonthlyCoffeesComponent;
  let fixture: ComponentFixture<MonthlyCoffeesComponent>;

  const coffeeServiceSpy = jasmine.createSpyObj('CoffeeService', ['getUserCoffees']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyCoffeesComponent ],
      providers: [
        {provide: CoffeeService, useValue: coffeeServiceSpy}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    coffeeServiceSpy.getUserCoffees.and.returnValue(asyncData([]));
    fixture = TestBed.createComponent(MonthlyCoffeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
