import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {distanceInWordsToNow} from 'date-fns';
import {combineLatest, forkJoin, Observable} from 'rxjs';
import {map, mergeMap, take} from 'rxjs/operators';
import {CoffeeService} from '../coffee.service';
import {CUser} from '../CUser';
import {Payment} from '../payment';
import {Portion} from '../portion';

@Component({
  selector: 'app-live-feed',
  templateUrl: './live-feed.component.html',
  styleUrls: ['./live-feed.component.scss']
})
export class LiveFeedComponent implements OnInit {

  public feed$: Observable<Array<string[]>>;

  constructor(private coffeeService: CoffeeService, private afs: AngularFirestore) {
    this.feed$ = combineLatest(
      coffeeService.getLastNPayments().pipe(
        mergeMap((payments: Payment[]) => forkJoin(payments
          .filter(payment => !!payment.date)
          .map(payment => this.stringifyPayment(payment)))
        )
      ),

      coffeeService.getLastNCoffees().pipe(
        mergeMap((portions: Portion[]) => forkJoin(portions
          .filter(portion => !!portion.date)
          .map(portion => this.stringifyPortion(portion)))
        ),
      )
    ).pipe(([payments, portions]: [Array<string[]>, Array<string[]>]) => payments.concat(portions));
  }

  ngOnInit() {}

  private stringifyPortion(portion: Portion): Observable<string[]> {
    return this.afs.doc<CUser>(`users/${portion.user}`).valueChanges().pipe(
      take(1),
      map((user: CUser) => [
        `${user.name} made a ${portion.amount === 1 ? 'single' : 'double'} coffee`,
        distanceInWordsToNow(portion.date.toDate(), {addSuffix: true})
      ]),
    );
  }

  private stringifyPayment(payment: Payment) {
    return this.afs.doc<CUser>(`users/${payment.user}`).valueChanges().pipe(
      take(1),
      map((user: CUser) => [
        `${user.name} paid for ${payment.portions} portions`,
        distanceInWordsToNow(payment.date.toDate(), {addSuffix: true})
      ]),
    );
  }
}
