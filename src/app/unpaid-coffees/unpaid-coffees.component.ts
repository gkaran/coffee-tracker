import {Component} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore} from 'angularfire2/firestore';
import {endOfMonth, startOfMonth} from 'date-fns';
import {Observable} from 'rxjs';
import {filter, map, mergeMap} from 'rxjs/operators';
import {Portion} from '../portion';

@Component({
  selector: 'app-unpaid-coffees',
  templateUrl: './unpaid-coffees.component.html',
  styleUrls: ['./unpaid-coffees.component.css']
})
export class UnpaidCoffeesComponent {

  portionCost = 0.15;
  portions$: Observable<number>;

  constructor(afs: AngularFirestore, public afAuth: AngularFireAuth) {
    this.portions$ = afAuth.authState.pipe(
      filter(user => !!user),
      mergeMap(user => afs.collection('portions', ref => ref
          .where('userId', '==', user.uid)
          .where('date', '>=', startOfMonth(new Date()))
          .where('date', '<=', endOfMonth(new Date()))
        ).valueChanges()
      ),
      map((data: Portion[]) => data.map(d => d.portions).reduce((a, b) => a + b, 0))
    );
  }

}
