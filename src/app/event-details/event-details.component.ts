import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.services';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from './shared/event.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  event: IEvent | undefined;
  addMode: boolean;
  session: ISession;
  filterBy: string | undefined = 'all';
  sortBy: string | undefined = ' votes';

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
    this.event = this.eventService.getEvent(params['id']);
    this.addMode = false;
    });
    //this.event = this.eventService.getEvent(this.route.snapshot.params['id']);
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(this.event?.sessions.map((s) => s.id));
    session.id = nextId + 1;
    this.event?.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }
}
