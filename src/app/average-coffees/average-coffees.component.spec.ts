import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageCoffeesComponent } from './average-coffees.component';

describe('AverageCoffeesComponent', () => {
  let component: AverageCoffeesComponent;
  let fixture: ComponentFixture<AverageCoffeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AverageCoffeesComponent ]
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
