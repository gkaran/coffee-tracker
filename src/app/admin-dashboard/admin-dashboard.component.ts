import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource, MatSortable} from '@angular/material';
import {CUser} from '../CUser';
import {UsersService} from '../services/users.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  displayedColumns = ['name', 'roles', 'totalPortions', 'paidPortions', 'due'];
  dataSource: MatTableDataSource<CUser> = new MatTableDataSource([]);

  totalPortions = 0;
  totalPaidPortions = 0;
  totalDuePortions = 0;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private userService: UsersService) {
    this.userService.getAllUsers().subscribe(users => {
      this.totalPortions = users.map(user => user.totalPortions || 0).reduce((a, b) => a + b, 0);
      this.totalPaidPortions = users.map(user => user.paidPortions || 0).reduce((a, b) => a + b, 0);
      this.totalDuePortions = this.totalPortions - this.totalPaidPortions;
      this.dataSource.data = users.map(user => ({...user, due: user.totalPortions - user.paidPortions}));
    });
  }

  ngOnInit() {
    this.sort.sort(<MatSortable>({id: 'due', start: 'desc'}));
    this.dataSource.sort = this.sort;
  }

}
