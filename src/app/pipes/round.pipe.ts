import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'round'
})
export class RoundPipe implements PipeTransform {

  transform(value: number, points: number = 2): number {
    const rounder = points > 0 ? Math.pow(10, points) : 1;
    return Math.round(value * rounder) / rounder;
  }

}
