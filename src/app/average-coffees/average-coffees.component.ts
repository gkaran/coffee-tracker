import {Component} from '@angular/core';
import {endOfMonth, format, isBefore, parse, startOfMonth} from 'date-fns';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Portion} from '../portion';
import {CoffeeService} from '../coffee.service';

@Component({
  selector: 'app-average-coffees',
  templateUrl: './average-coffees.component.html',
  styleUrls: ['./average-coffees.component.css']
})
export class AverageCoffeesComponent {

  public chartOptions: any = {
    responsive: true,
    maintainAspectRatio: false
  };
  public chartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  public chartData$: Observable<{ data: any[], labels: any[] }>;

  constructor(private coffeeService: CoffeeService) {
    this.chartData$ = coffeeService.getUserCoffees(startOfMonth(new Date()), endOfMonth(new Date())).pipe(
      map((data: Portion[]) => {
        const mappedData = data.map(dt => ({...dt, date: format(dt.date.toDate(), 'YYYY-MM-DD')}))
          .sort((a, b) => isBefore(parse(a.date), parse(b.date)) ? -1 : 1);
        const labels = Array.from(new Set(mappedData.map(dd => dd.date)));

        const d = this.groupBy(mappedData, 'date');
        const orderedData = [];
        for (const date of labels) {
          orderedData.push(d[date].map(i => i.totalPortions).reduce((a, b) => a + b, 0));
        }
        return {
          data: orderedData,
          labels
        };
      })
    );
  }

  private groupBy(xs, key): Map<string, any[]> {
    return xs.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }
}
