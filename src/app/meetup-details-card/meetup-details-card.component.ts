import { Component } from '@angular/core';
import { Meetup } from '../../models/meetup.model';
import { MeetupsDB } from './../../models/meetups.db';

@Component({
  selector: 'site-meetup-details-card',
  styleUrls: ['./meetup-details-card.component.scss'],
  templateUrl: './meetup-details-card.component.html',
})
export class MeetupDetailsCardComponent {
  meetups: Meetup[] = MeetupsDB;
}
