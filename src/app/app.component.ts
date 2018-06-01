import {Component} from '@angular/core';
import {MatDialog, MatSnackBar} from '@angular/material';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore} from 'angularfire2/firestore';
import * as firebase from 'firebase';
import {User} from 'firebase';
import {combineLatest} from 'rxjs';
import {filter, mergeMap, take} from 'rxjs/operators';
import {AddCoffeeModalComponent} from './modals/add-coffee-modal/add-coffee-modal.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public afAuth: AngularFireAuth, public dialog: MatDialog, private afs: AngularFirestore, public snackBar: MatSnackBar) {}

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  openAddCoffeeModal() {
    const dialogRef = this.dialog.open(AddCoffeeModalComponent, {
      width: '250px',
      data: {double: false}
    });

    combineLatest(
      dialogRef.afterClosed().pipe(filter(result => result !== undefined)),
      this.afAuth.user.pipe(filter(user => !!user))
    ).pipe(
      take(1),
      mergeMap(([double, user]: [boolean, User]) => this.afs.collection(`users/${user.uid}/portions`).add({
        amount: double ? 2 : 1,
        date: firebase.firestore.FieldValue.serverTimestamp()
      }))
    ).subscribe(() => {
      this.snackBar.open('Your coffee has been added! Enjoy!', 'OK', {duration: 2000});
    }, () => {
      this.snackBar.open('Your coffee got spilled. Please try again!', 'Oh, no!', {duration: 2000});
    });
  }
}
