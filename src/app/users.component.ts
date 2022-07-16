import { Component, EventEmitter, Input, NgIterable, Output } from '@angular/core';
import {  Router } from '@angular/router';
import { IEvent } from './event-details/shared/event.model';
import { EventService } from './event-details/shared/event.services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./app.component.css']
})
export class UsersComponent {
  title = 'Validation';
  object:IEvent[] | undefined

  constructor(private router:Router , private eventService:EventService ){

  }
    ngOnInit() {
     this.object = this.eventService.getEventss()
  }


  cancel(){
    this.router.navigate(['/events'])
  }



}
