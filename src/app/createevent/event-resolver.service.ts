import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { map } from 'rxjs/operators';
import { EventService } from '../event-details/shared/event.services';
import { Subject } from 'rxjs';

@Injectable()
export class EventResolver implements Resolve<any> {
  constructor(private eventService: EventService) {}
  resolve(route : ActivatedRouteSnapshot) {
    return this.eventService.getEvent(route.params['id']);
  }
}
