import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import {AdminGuard} from './admin.guard';
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
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [AuthedGuard, AdminGuard]
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
