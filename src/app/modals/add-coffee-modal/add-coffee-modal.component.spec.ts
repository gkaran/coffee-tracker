import {NO_ERRORS_SCHEMA} from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MAT_DIALOG_DATA} from '@angular/material';

import { AddCoffeeModalComponent } from './add-coffee-modal.component';

describe('AddCoffeeModalComponent', () => {
  let component: AddCoffeeModalComponent;
  let fixture: ComponentFixture<AddCoffeeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCoffeeModalComponent ],
      providers: [
        {provide: MAT_DIALOG_DATA, useValue: {}}
      ],
      schemas: [NO_ERRORS_SCHEMA]
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
