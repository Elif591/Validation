import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { map } from 'rxjs/operators';
import { EventService } from './event-details/shared/event.services';
import { Subject } from 'rxjs';


@Injectable()
export class EventListResolver implements Resolve<any>{
  constructor(private eventService:EventService){

  }
  resolve(){
   return this.eventService.getEvents()
  }
}
