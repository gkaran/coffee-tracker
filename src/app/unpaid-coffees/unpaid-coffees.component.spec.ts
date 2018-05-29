import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnpaidCoffeesComponent } from './unpaid-coffees.component';

describe('UnpaidCoffeesComponent', () => {
  let component: UnpaidCoffeesComponent;
  let fixture: ComponentFixture<UnpaidCoffeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnpaidCoffeesComponent ]
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
