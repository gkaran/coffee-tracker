import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './services/auth.service';
import {map} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class NonAuthedGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.user$.pipe(
      map((user) => {
        if (user != null) {
          this.router.navigate(['dashboard']);
          return false;
        }
        return true;
      })
    );
  }
}
