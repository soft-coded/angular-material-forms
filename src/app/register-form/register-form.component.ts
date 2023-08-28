import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { User, UsersService } from '../users.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent {
  constructor(private usersService: UsersService) {}

  handleFormSubmit(form: NgForm) {
    this.usersService.addUser({
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      email: form.value.email,
      contactNumber: +form.value.contactNumber,
    });
  }
}
