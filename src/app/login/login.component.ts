import {Component} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public error: any;

  constructor(private authService: AuthService, private router: Router) {}

  public loginWithGoogle() {
    this.authService.loginWithGoogle().then(() => this.router.navigate(['dashboard']));
  }

  public loginWithEmail(event, email, password) {
    event.preventDefault();
    this.authService.loginWithEmail(email, password)
      .then(() => this.router.navigate(['dashboard']))
      .catch(error => this.error = error);
  }

}
