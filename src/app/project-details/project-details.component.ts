import { Component } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectsDB } from './../../models/projects.db';

@Component({
  selector: 'site-project-details',
  styleUrls: ['./project-details.component.scss'],
  templateUrl: './project-details.component.html',
})
export class ProjectDetailsComponent {
  projects: Project[] = ProjectsDB;
}
