import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyCoffeesComponent } from './monthly-coffees.component';

describe('MonthlyCoffeesComponent', () => {
  let component: MonthlyCoffeesComponent;
  let fixture: ComponentFixture<MonthlyCoffeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyCoffeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyCoffeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
