import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {CoffeeService} from '../coffee.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  public portions$: Observable<number>;

  constructor(private coffeeService: CoffeeService) { }

  ngOnInit(): void {
    this.portions$ = this.coffeeService.getUserUnpaidCoffees();
  }

}
