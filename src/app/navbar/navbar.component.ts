import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from 'firebase';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Input() user: User;
  @Output() logout: EventEmitter<void> = new EventEmitter<void>();
  @Output() updateName: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

}
