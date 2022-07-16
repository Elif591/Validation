import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { map } from 'rxjs/operators';
import { EventService } from './event-details/shared/event.services';
import { Subject } from 'rxjs';


@Injectable()
export class EventResolver implements Resolve<any>{
  constructor(private eventService:EventService){

  }
  resolve(){
   return this.eventService.getEvents().pipe(map(events => events)) //Bu islev bir observeble dondurur. map ile observebla da haritayi cagiriyoruz ve akista aktarilan olaylara erisebiliriz
  }
}
