import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatDialog, MatSnackBar} from '@angular/material';
import {filter, mergeMap} from 'rxjs/operators';
import {CUser} from '../CUser';
import {UpdateNameModalComponent} from '../modals/update-name-modal/update-name-modal.component';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Input() user: CUser;
  @Output() logout: EventEmitter<void> = new EventEmitter<void>();

  constructor(public dialog: MatDialog, private authService: AuthService, public snackBar: MatSnackBar) { }

  updateName() {
    const dialogRef = this.dialog.open(UpdateNameModalComponent, {
      width: '250px',
      data: {
        displayName: this.user.name
      }
    });

    dialogRef.afterClosed().pipe(
      filter(name => name !== undefined),
      mergeMap(name => this.authService.updateName(name))
    ).subscribe(
      () => this.snackBar.open('Wow, what a cool name!!', 'OK', {duration: 2000}),
      () => this.snackBar.open('Name changing did not work this time. Sorry!', 'OK', {duration: 2000})
    );
  }

}
