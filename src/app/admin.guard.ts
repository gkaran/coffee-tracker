import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {map} from 'rxjs/internal/operators';
import {AuthService} from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.cUser$.pipe(
      map(user => {
        if (user == null || !(user.roles || []).includes('admin')) {
          this.router.navigate(['login']);
          return false;
        }
        return true;
      })
    );
  }
}
