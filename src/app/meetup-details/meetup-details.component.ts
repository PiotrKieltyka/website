import { MeetupsDB } from './../../models/meetups.db';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'site-meetup-details',
  styleUrls: ['./meetup-details.component.scss'],
  templateUrl: './meetup-details.component.html',
})
export class MeetupDetailsComponent implements OnInit {

  meetups = MeetupsDB;

  constructor() { }

  ngOnInit() {
  }

  get m() { return this.meetups; }

}
