import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EventService } from './event-details/shared/index';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  events: any;
  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  parentFunction(data: any) {
    console.log(data);
  }
}
