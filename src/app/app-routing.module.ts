import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UserDashboardComponent} from './user-dashboard/user-dashboard.component';
import {NonAuthedGuard} from './non-authed.guard';
import {AuthedGuard} from './authed.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    component: UserDashboardComponent,
    canActivate: [AuthedGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NonAuthedGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [NonAuthedGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
