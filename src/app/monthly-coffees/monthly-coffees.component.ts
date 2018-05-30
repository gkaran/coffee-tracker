import {Component} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore} from 'angularfire2/firestore';
import {endOfMonth, startOfMonth} from 'date-fns';
import {Observable} from 'rxjs';
import {filter, map, mergeMap} from 'rxjs/operators';
import {Portion} from '../portion';

@Component({
  selector: 'app-monthly-coffees',
  templateUrl: './monthly-coffees.component.html',
  styleUrls: ['./monthly-coffees.component.css']
})
export class MonthlyCoffeesComponent {

  public monthlyTotals$: Observable<number>;

  constructor(afs: AngularFirestore, afAuth: AngularFireAuth) {
    this.monthlyTotals$ = afAuth.authState.pipe(
      filter(user => !!user),
      mergeMap(user => afs.collection(`users`).doc(user.uid).collection('portions', ref => ref
        .where('date', '>=', startOfMonth(new Date()))
        .where('date', '<=', endOfMonth(new Date()))
      ).valueChanges()),
      map((data: Portion[]) => data.map(d => d.amount).reduce((a, b) => a + b, 0))
    );
  }


}
