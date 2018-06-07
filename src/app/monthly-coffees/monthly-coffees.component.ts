import {Component} from '@angular/core';
import {endOfMonth, startOfMonth} from 'date-fns';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CoffeeService} from '../coffee.service';
import {Portion} from '../portion';

@Component({
  selector: 'app-monthly-coffees',
  templateUrl: './monthly-coffees.component.html',
  styleUrls: ['./monthly-coffees.component.css']
})
export class MonthlyCoffeesComponent {

  public monthlyTotals$: Observable<number>;

  constructor(private coffeeService: CoffeeService) {
    this.monthlyTotals$ = coffeeService.getUserCoffees(startOfMonth(new Date()), endOfMonth(new Date())).pipe(
      map((data: Portion[]) => data.map(d => d.amount).reduce((a, b) => a + b, 0))
    );
  }


}
