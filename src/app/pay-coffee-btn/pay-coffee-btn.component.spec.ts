import {NO_ERRORS_SCHEMA} from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayCoffeeBtnComponent } from './pay-coffee-btn.component';

xdescribe('PayCoffeeBtnComponent', () => {
  let component: PayCoffeeBtnComponent;
  let fixture: ComponentFixture<PayCoffeeBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayCoffeeBtnComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayCoffeeBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
