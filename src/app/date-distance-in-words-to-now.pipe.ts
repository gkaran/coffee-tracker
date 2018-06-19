import { Pipe, PipeTransform } from '@angular/core';
import {distanceInWordsToNow} from 'date-fns';

@Pipe({
  name: 'dateDistanceInWordsToNow'
})
export class DateDistanceInWordsToNowPipe implements PipeTransform {

  transform(date: Date): any {
    return distanceInWordsToNow(date, {addSuffix: true});
  }

}
