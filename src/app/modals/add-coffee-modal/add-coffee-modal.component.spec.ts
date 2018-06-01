import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoffeeModalComponent } from './add-coffee-modal.component';

describe('AddCoffeeModalComponent', () => {
  let component: AddCoffeeModalComponent;
  let fixture: ComponentFixture<AddCoffeeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCoffeeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCoffeeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
