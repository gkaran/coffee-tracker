import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {CoffeeService} from '../coffee.service';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  public due$: Observable<number>;

  constructor(private coffeeService: CoffeeService, public authService: AuthService) { }

  ngOnInit(): void {
    this.due$ = this.coffeeService.getUserDue();
  }

}
