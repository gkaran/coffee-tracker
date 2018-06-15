import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayCoffeeModalComponent } from './pay-coffee-modal.component';

describe('PayCoffeeModalComponent', () => {
  let component: PayCoffeeModalComponent;
  let fixture: ComponentFixture<PayCoffeeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayCoffeeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayCoffeeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
