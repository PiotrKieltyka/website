import { Component } from '@angular/core';
import { MeetupsDB } from './../../models/meetups.db';

@Component({
  selector: 'site-meetup-details',
  styleUrls: ['./meetup-details.component.scss'],
  templateUrl: './meetup-details.component.html',
})
export class MeetupDetailsComponent {
  meetups = MeetupsDB;
}
