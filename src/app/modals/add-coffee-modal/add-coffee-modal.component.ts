import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-portion-modal',
  templateUrl: './add-coffee-modal.component.html',
  styleUrls: ['./add-coffee-modal.component.scss']
})
export class AddCoffeeModalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

}
