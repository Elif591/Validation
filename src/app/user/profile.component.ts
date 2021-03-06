import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { IUser } from './user.model';
import { TOASTR_TOKEN, Tosatr } from '../toastr.service';


import { NotificationService } from '../notification.service'


@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;
  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: Tosatr,
    private notifyService: NotificationService
  ) {}
  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [
      Validators.required,
      Validators.pattern('[a-zA-Z].*'),
    ]);
    this.lastName = new FormControl(
      this.authService.currentUser.lastName,
      Validators.required
    );
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
    });
  }

  cancel() {
    this.router.navigate(['events']);
  }
  saveProfile(formValues: IUser) {
    if (this.profileForm.valid) {
      this.authService.updatecurrentUser(
        formValues.firstName,
        formValues.lastName
      ).subscribe(() => {
       this.toastr.success('profile saved');
      })

    }
  }

   logout(){
    this.authService.logout().subscribe(()=> {
      this.router.navigate(['/user/login']);
    })
   }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }
  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

  showToasterSuccess() {
    this.notifyService.showSuccess(
      'Profile saved!!', 'Saved');
  }

  showToasterError() {
    this.notifyService.showError('Something is wrong', 'ItSolutionStuff.com');
  }

  showToasterInfo() {
    this.notifyService.showInfo('This is info', 'ItSolutionStuff.com');
  }

  showToasterWarning() {
    this.notifyService.showWarning('This is warning', 'ItSolutionStuff.com');
  }
}
