import {Component} from '@angular/core';
import {MatDialog, MatSnackBar} from '@angular/material';
import {filter, mergeMap} from 'rxjs/operators';
import {CoffeeService} from '../coffee.service';
import {CUser} from '../CUser';
import {AddCoffeeModalComponent} from '../modals/add-coffee-modal/add-coffee-modal.component';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-add-coffee-btn',
  templateUrl: './add-coffee-btn.component.html',
  styleUrls: ['./add-coffee-btn.component.scss']
})
export class AddCoffeeBtnComponent {

  private user: CUser;

  constructor(public dialog: MatDialog, public snackBar: MatSnackBar, private coffeeService: CoffeeService,
              private authService: AuthService) {
    authService.cUser$.subscribe(user => this.user = user);
  }

  openAddCoffeeModal() {
    const dialogRef = this.dialog.open(AddCoffeeModalComponent, {
      width: '250px',
      data: {double: this.user ? !!this.user.preferDoubleCoffee : false}
    });

    dialogRef.afterClosed().pipe(
      filter(result => result !== undefined),
      mergeMap((double) => this.coffeeService.addCoffee(double))
    ).subscribe(() => {
      this.snackBar.open('Your coffee has been added! Enjoy!', 'OK', {duration: 2000});
    }, (x) => {
      console.log(x);
      this.snackBar.open('Your coffee got spilled. Please try again!', 'Oh, no!', {duration: 2000});
    });
  }

}
