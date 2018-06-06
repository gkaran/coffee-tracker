import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {AddCoffeeBtnComponent} from './add-coffee-btn/add-coffee-btn.component';
import {PayCoffeeBtnComponent} from './pay-coffee-btn/pay-coffee-btn.component';
import {Router} from '@angular/router';
import {AuthService} from './services/auth.service';
import {Component} from '@angular/core';
describe('AppComponent', () => {

  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  const authServiceSpy = jasmine.createSpyObj('AuthService', ['logout']);

  @Component({selector: 'app-navbar', template: '', inputs: ['user']})
  class NavbarStubComponent {}

  @Component({selector: 'router-outlet', template: ''})
  class RouterOutletStubComponent {}

  @Component({selector: 'app-add-coffee-btn', template: ''})
  class AddCoffeeStubComponent {}

  @Component({selector: 'app-pay-coffee-btn', template: ''})
  class PayCoffeeStubComponent {}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarStubComponent,
        RouterOutletStubComponent,
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
