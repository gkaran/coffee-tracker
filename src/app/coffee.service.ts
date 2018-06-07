import {Injectable} from '@angular/core';
import {CUser} from './CUser';
import {AuthService} from './services/auth.service';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {filter, map, mergeMap, take} from 'rxjs/internal/operators';
import * as firebase from 'firebase';
import {User} from 'firebase';
import {Portion} from './portion';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  constructor(private afs: AngularFirestore, private authService: AuthService) { }

  public addCoffee(double: boolean): Observable<any> {
    return this.authService.user$.pipe(
      filter(user => !!user),
      take(1),
      map((user: User) => `users/${user.uid}/portions`),
      mergeMap(path => this.afs.collection(path).add({
        amount: double ? 2 : 1,
        date: firebase.firestore.FieldValue.serverTimestamp()
      }))
    );
  }

  public getUserCoffees(from: Date, to: Date): Observable<Portion[]> {
    return this.authService.user$.pipe(
      filter(user => !!user),
      mergeMap(user => this.afs.collection<Portion>(
        `users/${user.uid}/portions`,
          ref => ref.where('date', '>=', from).where('date', '<=', to)
      ).valueChanges())
    );
  }

  public getUserUnpaidCoffees(): Observable<number> {
    return this.authService.user$.pipe(
      filter(user => !!user),
      mergeMap(user => this.afs.collection(`users`).doc(user.uid).valueChanges()),
      map((data: CUser) => data ? data.totalPortions - data.paidPortions : 0)
    );
  }
}
