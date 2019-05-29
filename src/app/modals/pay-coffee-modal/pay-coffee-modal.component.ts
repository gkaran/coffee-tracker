import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-pay-coffee-modal',
  templateUrl: './pay-coffee-modal.component.html',
  styleUrls: ['./pay-coffee-modal.component.scss']
})
export class PayCoffeeModalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

}
