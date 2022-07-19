import { Component} from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { AuthService } from './auth.service';
import { IUser } from './user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  userName:string =''
  password:string=''
  mouseoverLogin:boolean
  loginInvalid = false
  constructor(private authService:AuthService , private route:Router) {

  }

  login(formValues:IUser){

     this.authService.loginUser(formValues.userName , formValues.password).subscribe(resp => {
      if(!resp){
        this.loginInvalid = true;
      }else{
     this.route.navigate(['./events']);
      }
     })
  }

}
