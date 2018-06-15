import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-pay-coffee-modal',
  templateUrl: './pay-coffee-modal.component.html',
  styleUrls: ['./pay-coffee-modal.component.scss']
})
export class PayCoffeeModalComponent {

  private readonly portionCentsConst = 15;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    data.portions = 1;
    this.updateMoney(data.portions);
  }

  updateMoney(portions) {
    this.data.money = (portions * this.portionCentsConst) / 100;
  }

  updatePortions(money) {
    this.data.portions = Math.round(((money * 100) / this.portionCentsConst) * 100) / 100;
  }

}
