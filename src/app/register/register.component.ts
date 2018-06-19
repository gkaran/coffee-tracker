import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public error: any;

  constructor(private authService: AuthService, private router: Router) { }

  register(event, email, password) {
    event.preventDefault();

    this.authService.register(email, password)
      .then(user => this.router.navigate(['dashboard']))
      .catch(error => this.error = error);
  }

}
