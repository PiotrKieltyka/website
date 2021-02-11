import { Component } from '@angular/core';
import { StudiesDB } from './../../models/studies.db';

@Component({
  selector: 'site-personal-studies',
  styleUrls: ['./personal-studies.component.scss'],
  templateUrl: './personal-studies.component.html',
})
export class PersonalStudiesComponent {
  studies = StudiesDB;
}
