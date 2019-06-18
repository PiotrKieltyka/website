import { MeetupsDB } from './../../models/meetups.db';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'site-meetup-details',
  templateUrl: './meetup-details.component.html',
  styleUrls: ['./meetup-details.component.scss']
})
export class MeetupDetailsComponent implements OnInit {

  meetups = MeetupsDB;

  constructor() { }

  ngOnInit() {
  }

  get m() { return this.meetups; }

}
