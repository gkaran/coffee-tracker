import {Component} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {filter, map, mergeMap} from 'rxjs/operators';
import {CUser} from '../CUser';

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
      mergeMap(user => afs.collection(`users`).doc(user.uid).valueChanges()),
      map((data: CUser) => data ? data.totalPortions - data.paidPortions : 0)
    );
  }

}
