import {Component, NO_ERRORS_SCHEMA} from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {BaseChartDirective} from 'ng2-charts';
import {asyncData} from '../test-utils';

import { AverageCoffeesComponent } from './average-coffees.component';
import {CoffeeService} from '../coffee.service';

describe('AverageCoffeesComponent', () => {
  let component: AverageCoffeesComponent;
  let fixture: ComponentFixture<AverageCoffeesComponent>;

  const coffeeServiceSpy = jasmine.createSpyObj('CoffeeService', ['getUserCoffees']);

  /*@Component({selector: 'mat-card', template: ''})
  class MatCardStubComponent {}

  @Component({selector: 'mat-card-header', template: ''})
  class MatCardHeaderStubComponent {}

  @Component({selector: 'mat-card-title', template: ''})
  class MatCardTitleStubComponent {}

  @Component({selector: 'mat-card-content', template: ''})
  class MatCardContentStubComponent {}

  @Component({selector: 'mat-card-footer', template: ''})
  class MatCardFooterStubComponent {}

  @Component({selector: 'mat-spinner', template: ''})
  class MatSpinnerStubComponent {}*/

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        // MatCardStubComponent,
        // MatCardHeaderStubComponent,
        // MatCardTitleStubComponent,
        // MatCardContentStubComponent,
        // MatCardFooterStubComponent,
        // MatSpinnerStubComponent,
        AverageCoffeesComponent,
        BaseChartDirective
      ],
      providers: [
        {provide: CoffeeService, useValue: coffeeServiceSpy}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    coffeeServiceSpy.getUserCoffees.and.returnValue(asyncData([]));
    fixture = TestBed.createComponent(AverageCoffeesComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
