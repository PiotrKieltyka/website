import { MeetupsDB } from './../../models/meetups.db';
import { Component, OnInit } from '@angular/core';
import {Meetup} from '../../models/meetup.model';

@Component({
  selector: 'site-meetup-details-card',
  styleUrls: ['./meetup-details-card.component.scss'],
  templateUrl: './meetup-details-card.component.html',
})
export class MeetupDetailsCardComponent implements OnInit {

  meetups: Meetup[] = MeetupsDB;

  constructor() { }

  ngOnInit() {
  }

  get m() { return this.meetups; }

}
