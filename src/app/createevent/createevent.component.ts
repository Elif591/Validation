import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { IEvent } from '../event-details/shared/event.model';
import { EventService } from '../event-details/shared/event.services';

@Component({
  selector: 'app-createevent',
  templateUrl: './createevent.component.html',
  styleUrls: ['./createevent.component.css'],
})
export class CreateeventComponent implements OnInit {
  isDirty: Boolean = true;
  newEvent: IEvent;
  event: any;

  constructor(private router: Router, private service: EventService) {}

  ngOnInit() {
    this.event = {
      name: 'ng-nl',
      date: new Date('4/15/2037'),
      time: '9:00 am',
      price: 950.0,
      imageUrl: '/assets/images/ng-nl.png',
      location: {
        address: 'The NG-NL Convention Center & Scuba Shop',
        city: 'Amsterdam',
        country: 'Netherlands',
      },
    };
  }

  saveEvent(formValues: IEvent) {
    this.service.saveEvent(formValues).subscribe(() => {
    this.isDirty = false;
    this.router.navigate(['/events']);
    });
  }

  cancel() {
    this.router.navigate(['/events']);
  }
  //sfjkls
}
