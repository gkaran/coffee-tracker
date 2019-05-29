import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {compareDesc} from 'date-fns';
import {combineLatest, forkJoin, merge, Observable, of} from 'rxjs';
import {map, mergeMap, take} from 'rxjs/operators';
import {CoffeeService} from '../coffee.service';
import {CUser} from '../CUser';
import {FeedEntry} from '../feed-entry';
import {Payment} from '../payment';
import {Portion} from '../portion';

@Component({
  selector: 'app-live-feed',
  templateUrl: './live-feed.component.html',
  styleUrls: ['./live-feed.component.scss']
})
export class LiveFeedComponent implements OnInit {

  public feed$: Observable<FeedEntry[]>;

  constructor(private coffeeService: CoffeeService, private afs: AngularFirestore) {
    this.feed$ = combineLatest(
      merge(
        of([]),
        coffeeService.getLastNPayments(40).pipe(
          mergeMap((payments: Payment[]) => forkJoin(payments
            .filter(payment => !!payment.date)
            .map(payment => this.mapPayment(payment)))
          )
        )
      ),

      merge(
        of([]),
        coffeeService.getLastNCoffees(40).pipe(
          mergeMap((portions: Portion[]) => forkJoin(portions
            .filter(portion => !!portion.date)
            .map(portion => this.mapPortion(portion)))
          ),
        )
      )
    ).pipe(
      map(([payments, portions]: [FeedEntry[], FeedEntry[]]) => payments
        .concat(portions)
        .sort((a, b) => compareDesc(a.date, b.date))
        .slice(0, 40))
    );
  }

  ngOnInit() {}

  private mapPortion(portion: Portion): Observable<FeedEntry> {
    return this.afs.doc<CUser>(`users/${portion.user}`).valueChanges().pipe(
      take(1),
      map((user: CUser) => ({
        text: `☕ ${user.name} made a ${portion.amount === 1 ? 'single' : 'double'} coffee`,
        date: portion.date.toDate()
      })),
    );
  }

  private mapPayment(payment: Payment): Observable<FeedEntry> {
    return this.afs.doc<CUser>(`users/${payment.user}`).valueChanges().pipe(
      take(1),
      map((user: CUser) => ({
        text: `💶 ${user.name} made a payment of ${payment.cost.toFixed(2)}€`,
        date: payment.date.toDate()
      })),
    );
  }
}
