import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageCoffeesComponent } from './average-coffees.component';
import {CoffeeService} from '../coffee.service';

describe('AverageCoffeesComponent', () => {
  let component: AverageCoffeesComponent;
  let fixture: ComponentFixture<AverageCoffeesComponent>;

  const coffeeServiceSpy = jasmine.createSpyObj('CoffeeService', ['getUserAverageCoffees']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AverageCoffeesComponent ],
      providers: [
        {provide: CoffeeService, useValue: coffeeServiceSpy}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageCoffeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
