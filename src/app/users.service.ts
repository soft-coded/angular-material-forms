import { Injectable } from '@angular/core';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: number;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users: User[] = [
    {
      firstName: 'Sunil',
      lastName: 'Negi',
      email: 'sunil@negi.com',
      contactNumber: 123456,
    },
    {
      firstName: 'Pavan',
      lastName: 'Tati',
      email: 'pavan@tati.com',
      contactNumber: 423412,
    },
  ];

  constructor() {}

  getAllUsers() {
    return this.users;
  }

  addUser(user: User) {
    this.users.push(user);
  }

  removeUser(index: number) {
    this.users.splice(index, 1);
  }
}
