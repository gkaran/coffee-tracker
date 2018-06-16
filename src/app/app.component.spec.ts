import {Component, Input} from '@angular/core';
import {async, TestBed} from '@angular/core/testing';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {User} from 'firebase';
import {AppComponent} from './app.component';
import {AuthService} from './services/auth.service';


describe('AppComponent', () => {

  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  const authServiceSpy = jasmine.createSpyObj('AuthService', ['logout']);

  @Component({selector: 'app-navbar', template: ''})
  class NavbarStubComponent {
    @Input() user: User;
  }

  @Component({selector: 'app-add-coffee-btn', template: ''})
  class AddCoffeeStubComponent {}

  @Component({selector: 'app-pay-coffee-btn', template: ''})
  class PayCoffeeStubComponent {}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        NavbarStubComponent,
        AddCoffeeStubComponent,
        PayCoffeeStubComponent
      ],
      providers: [
        {provide: Router, useValue: routerSpy},
        {provide: AuthService, useValue: authServiceSpy}
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
