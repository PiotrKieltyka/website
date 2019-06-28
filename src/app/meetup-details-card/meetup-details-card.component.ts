import { MeetupsDB } from './../../models/meetups.db';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'site-meetup-details-card',
  templateUrl: './meetup-details-card.component.html',
  styleUrls: ['./meetup-details-card.component.scss']
})
export class MeetupDetailsCardComponent implements OnInit {

  meetups = MeetupsDB;

  constructor() { }

  ngOnInit() {
  }

  get m() { return this.meetups; }

}
