import { Component, EventEmitter, Input, NgIterable, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  events:IEvent[] | undefined

  constructor(private router:Router , private route:ActivatedRoute, private eventService:EventService ){

  }
    ngOnInit() {
      this.events = this.route.snapshot.data['events']
  }


  cancel(){
    this.router.navigate(['/events'])
  }



}
