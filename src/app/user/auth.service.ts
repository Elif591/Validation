import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
  currentUser: IUser;

  loginUser(username: string, Password: string) {
    this.currentUser = {
      id: 1,
      userName: username,
      firstName: 'John',
      lastName: 'papa',
      password: Password,
    };
  }

  isAuthenticated() {
    console.log(this.currentUser.userName, this.currentUser.password);
    return !!this.currentUser;
  }

  updatecurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
