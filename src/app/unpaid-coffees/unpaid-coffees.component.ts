import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {CoffeeService} from '../coffee.service';

@Component({
  selector: 'app-unpaid-coffees',
  templateUrl: './unpaid-coffees.component.html',
  styleUrls: ['./unpaid-coffees.component.scss']
})
export class UnpaidCoffeesComponent {

  portions$: Observable<number>;

  constructor(private coffeeService: CoffeeService) {
    this.portions$ = coffeeService.getUserUnpaidCoffees();
  }

}
