import {Component} from '@angular/core';
import {filter, mergeMap} from 'rxjs/operators';
import {AddCoffeeModalComponent} from '../modals/add-coffee-modal/add-coffee-modal.component';
import {MatDialog, MatSnackBar} from '@angular/material';
import {CoffeeService} from '../coffee.service';

@Component({
  selector: 'app-add-coffee-btn',
  templateUrl: './add-coffee-btn.component.html',
  styleUrls: ['./add-coffee-btn.component.scss']
})
export class AddCoffeeBtnComponent {

  constructor(public dialog: MatDialog, public snackBar: MatSnackBar, private coffeeService: CoffeeService) {}

  openAddCoffeeModal() {
    const dialogRef = this.dialog.open(AddCoffeeModalComponent, {
      width: '250px',
      data: {double: false}
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
