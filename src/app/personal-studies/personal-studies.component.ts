import { StudiesDB } from './../../models/studies.db';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'site-personal-studies',
  styleUrls: ['./personal-studies.component.scss'],
  templateUrl: './personal-studies.component.html',
})
export class PersonalStudiesComponent implements OnInit {

  studies = StudiesDB;

  constructor() { }

  ngOnInit() {
  }

  get s() { return this.studies; }
}
