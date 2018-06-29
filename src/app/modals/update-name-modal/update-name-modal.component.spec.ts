import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNameModalComponent } from './update-name-modal.component';

xdescribe('UpdateNameModalComponent', () => {
  let component: UpdateNameModalComponent;
  let fixture: ComponentFixture<UpdateNameModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateNameModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNameModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
