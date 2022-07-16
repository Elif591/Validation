import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession } from '../event-details/shared/event.model';
import { EventService } from '../event-details/shared/event.services';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  navbarCollapsed: boolean = true;
  searchTerm: string = '';
  foundSessions: ISession[];
  constructor(public auth: AuthService, private eventService: EventService) {}

  searchSessions(searchTerm: string) {
    debugger;
    this.eventService.searchSessions(searchTerm).subscribe((sessions) => {
      this.foundSessions = sessions;
      console.log(this.foundSessions);
    });
  }

  ngOnInit(): void {}
}
