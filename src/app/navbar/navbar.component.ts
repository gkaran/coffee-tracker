import { UpdateNameModalComponent } from '../modals/update-name-modal/update-name-modal.component';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import { MatDialog } from '@angular/material';
import {User} from 'firebase';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Input() user: User;
  @Output() logout: EventEmitter<void> = new EventEmitter<void>();

  constructor(public dialog: MatDialog) { }

  updateName() {
    const dialogRef = this.dialog.open(UpdateNameModalComponent, {
      width: '250px',
      data: {
        displayName: this.user.displayName
      }
    });
  }

}
