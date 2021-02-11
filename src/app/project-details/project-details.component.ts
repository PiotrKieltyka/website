import { ProjectsDB } from './../../models/projects.db';
import { Component, OnInit } from '@angular/core';
import {Project} from '../../models/project.model';

@Component({
  selector: 'site-project-details',
  styleUrls: ['./project-details.component.scss'],
  templateUrl: './project-details.component.html',
})
export class ProjectDetailsComponent implements OnInit {

  projects: Project[] = ProjectsDB;

  constructor() { }

  ngOnInit() {
  }

  get p() { return this.projects; }

}
