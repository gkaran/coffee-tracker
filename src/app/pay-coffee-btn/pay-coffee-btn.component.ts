import {Component} from '@angular/core';
import {MatDialog, MatSnackBar} from '@angular/material';
import {filter, mergeMap} from 'rxjs/operators';
import {CoffeeService} from '../coffee.service';
import {PayCoffeeModalComponent} from '../modals/pay-coffee-modal/pay-coffee-modal.component';

@Component({
  selector: 'app-pay-coffee-btn',
  templateUrl: './pay-coffee-btn.component.html',
  styleUrls: ['./pay-coffee-btn.component.scss']
})
export class PayCoffeeBtnComponent {

  constructor(public dialog: MatDialog, public snackBar: MatSnackBar, private coffeeService: CoffeeService) { }

  openPayCoffeeModal() {
    const dialogRef = this.dialog.open(PayCoffeeModalComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().pipe(
      filter(result => result !== undefined),
      mergeMap(money => this.coffeeService.addPayment(money))
    ).subscribe(
      () => this.snackBar.open('Thank you for your payment', 'OK', {duration: 2000}),
      () => this.snackBar.open('Something went wrong with your payment', 'OK', {duration: 2000})
    );
  }

}
