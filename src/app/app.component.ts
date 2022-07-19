import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EventService } from './event-details/shared/index';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
 constructor(private auth : AuthService){

 }


  ngOnInit() {
    this.auth.checkAuthenticationStatus();
  }


}
