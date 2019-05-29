import {Pipe, PipeTransform} from '@angular/core';
import {map} from 'rxjs/operators';
import {CoffeeService} from '../coffee.service';

@Pipe({
  name: 'portions'
})
export class PortionsPipe implements PipeTransform {

  constructor(private coffeeService: CoffeeService) {}

  transform(value: any, args?: any): any {
    return this.coffeeService.portionsCost$.pipe(
      map(cost => value / cost)
    );
  }

}
