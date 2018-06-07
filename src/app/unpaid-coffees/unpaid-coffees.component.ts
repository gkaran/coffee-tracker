import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {CoffeeService} from '../coffee.service';

@Component({
  selector: 'app-unpaid-coffees',
  templateUrl: './unpaid-coffees.component.html',
  styleUrls: ['./unpaid-coffees.component.css']
})
export class UnpaidCoffeesComponent {

  portionCost = 0.15;
  portions$: Observable<number>;

  constructor(private coffeeService: CoffeeService) {
    this.portions$ = coffeeService.getUserUnpaidCoffees();
  }

}
