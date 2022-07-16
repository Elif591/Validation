import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailsComponent } from './event-details/event-details.component';
import { UsersComponent } from './users.component';
import { CreateeventComponent } from './createevent/createevent.component';
import { ErrorsComponent } from './errors/errors.component';
import { EventRouteActivator } from './event-details/event-activator.service';
import { EventResolver } from './event-resolver.sevice';
import { CreateSessionComponent } from './event-details/createsesson/createsesson.component';

export const routes: Routes = [
  {
    path: 'events/new',
    component: CreateeventComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },
  {
    path: 'events',
    component: UsersComponent,
    resolve: { events: EventResolver },
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventRouteActivator],
  },
  { path: '404', component: ErrorsComponent },
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.userModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
