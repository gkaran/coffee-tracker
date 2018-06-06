import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddCoffeeBtnComponent} from './add-coffee-btn.component';
import {MatDialog, MatIconModule, MatSnackBar} from '@angular/material';
import {of} from 'rxjs';
import {CoffeeService} from '../coffee.service';

class MatDialogMock {
  // When the component calls this.dialog.open(...) we'll return an object
  // with an afterClosed method that allows to subscribe to the dialog result observable.
  open() {
    return {
      afterClosed: () => of(false)
    };
  }
}

const matSnackBarSpy = jasmine.createSpyObj('MatSnackBar', ['open']);
const coffeeServiceSpy = jasmine.createSpyObj('CoffeeService', ['addCoffee']);

describe('AddCoffeeBtnComponent', () => {
  let component: AddCoffeeBtnComponent;
  let fixture: ComponentFixture<AddCoffeeBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule],
      declarations: [AddCoffeeBtnComponent],
      providers: [
        {provide: MatDialog, useClass: MatDialogMock},
        {provide: MatSnackBar, useValue: matSnackBarSpy},
        {provide: CoffeeService, useValue: coffeeServiceSpy}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCoffeeBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
