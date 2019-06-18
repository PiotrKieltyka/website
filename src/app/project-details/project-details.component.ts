import { ProjectsDB } from './../../models/projects.db';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'site-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  projects = ProjectsDB;

  constructor() { }

  ngOnInit() {
  }

  get p() { return this.projects; }

}
