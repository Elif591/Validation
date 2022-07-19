import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { CreateeventComponent } from './createevent/createevent.component';
import { ErrorsComponent } from './errors/errors.component';
import { EventListResolver } from './event-resolver.sevice';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationValidator } from './createevent/location-validator-directive';
import { JQ_TOKEN } from './jQuery.service';
import { EventResolver } from './createevent/event-resolver.service';
import {
  EventDetailsComponent,
  EventService,
  DurationPipe,
  UpvoteComponent,
  VoterService
} from './event-details/index';
import { NavComponent } from './nav/nav.component';
import { CreateSessionComponent } from './event-details/createsesson/createsesson.component';
import { SessionListComponent } from './event-details/session-list/session-list.component';
import { CollapsibleWellComponent } from './collapsible-well/collapsible-well.component';
import { SimpleModalComponent } from './simple-modal/simple-modal.component';
import { ModalTriggerDirective } from './modal-trigger.directive/modal-trigger.directive.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';


let jQuery = window['$'];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    EventDetailsComponent,
    CreateeventComponent,
    ErrorsComponent,
    NavComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,

    // NgAnimat
  ],
  providers: [
    EventService,
    EventListResolver,
    EventResolver,
    AuthService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
    { provide: JQ_TOKEN, useValue: jQuery },
    VoterService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function checkDirtyState(component: CreateeventComponent) {
  if (component.isDirty) {
    return window.confirm(
      'You have not saved this event , do you realley want to cancel?'
    );
  }
  return true;
}
