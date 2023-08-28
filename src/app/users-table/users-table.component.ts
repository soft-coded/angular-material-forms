import { Component } from '@angular/core';

import { User, UsersService } from '../users.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
})
export class UsersTableComponent {
  users: User[];

  constructor(private usersService: UsersService) {
    this.users = this.usersService.getAllUsers();
  }
}
