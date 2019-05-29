import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import * as firebase from 'firebase';
import {User} from 'firebase';
import {Observable} from 'rxjs';
import {fromPromise} from 'rxjs/internal-compatibility';
import {filter, map, mergeMap, take} from 'rxjs/operators';
import {CUser} from './CUser';
import {Payment} from './payment';
import {Portion} from './portion';
import {AuthService} from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  constructor(private afs: AngularFirestore, private authService: AuthService) { }

  public portionsCost$ = fromPromise(
    this.afs.firestore.collection('/portion-costs')
      .orderBy('effective date', 'desc')
      .limit(1)
      .get()
    ).pipe(
      map(snapshot => snapshot.docs[0].data()['cost'])
    );

  public addCoffee(double: boolean): Observable<any> {
    return this.authService.user$.pipe(
      filter(user => !!user),
      take(1),
      mergeMap((user: User) => this.afs.collection('portions').add({
        user: user.uid,
        amount: double ? 2 : 1,
        date: firebase.firestore.FieldValue.serverTimestamp()
      }))
    );
  }

  public getLastNCoffees(numberOfCoffees: number = 20): Observable<Portion[]> {
    return this.afs.collection<Portion>('portions', ref => ref.limit(numberOfCoffees).orderBy('date', 'desc')).valueChanges();
  }

  public getUserCoffees(from: Date, to: Date): Observable<Portion[]> {
    return this.authService.user$.pipe(
      filter(user => !!user),
      mergeMap(user => this.afs.collection<Portion>(
        `portions`,
        ref => ref.where('user', '==', user.uid).where('date', '>=', from).where('date', '<=', to)
      ).valueChanges())
    );
  }

  public getUserDue(): Observable<number> {
    return this.authService.user$.pipe(
      filter(user => !!user),
      mergeMap(user => this.afs.collection(`users`).doc(user.uid).valueChanges()),
      map((data: CUser) => data ? data.totalPortionsCost - data.totalPayments : 0)
    );
  }

  public addPayment(cost: number): Observable<any> {
    return this.authService.user$.pipe(
      filter(user => !!user),
      take(1),
      mergeMap((user: User) => this.afs.collection('payments').add({
        user: user.uid,
        cost,
        date: firebase.firestore.FieldValue.serverTimestamp()
      }))
    );
  }

  public getLastNPayments(numberOfPayments: number = 20): Observable<Payment[]> {
    return this.afs.collection<Payment>('payments', ref => ref.limit(numberOfPayments).orderBy('date', 'desc')).valueChanges();
  }

}
