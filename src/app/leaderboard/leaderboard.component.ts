import {Component} from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent {

  constructor() { }

  displayedColumns = ['name', 'total', 'average'];
  dataSource = ELEMENT_DATA;

}

export interface UserStats {
  name: string;
  total: number;
  average: number;
}

const ELEMENT_DATA: UserStats[] = [
  {name: 'John', total: 100, average: 5},
  {name: 'George', total: 60, average: 2.23},
  {name: 'Chris Y.', total: 1, average: 1.23}
];
