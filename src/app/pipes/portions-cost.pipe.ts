import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'portionsCost'
})
export class PortionsCostPipe implements PipeTransform {

  private readonly portionsCost = .15;

  transform(value: number): any {
    return value * this.portionsCost;
  }

}
