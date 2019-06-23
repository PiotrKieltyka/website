import { StudiesDB } from './../../models/studies.db';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'site-personal-studies',
  templateUrl: './personal-studies.component.html',
  styleUrls: ['./personal-studies.component.scss']
})
export class PersonalStudiesComponent implements OnInit {

  studies = StudiesDB;

  constructor() { }

  ngOnInit() {
  }

  get s() { return this.studies; }
}
