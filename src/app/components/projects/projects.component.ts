import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
  public title: string;
  public url: string;
  public projects: any;

  constructor(
    private _projectService : ProjectService,
  ){
    this.title = 'Lista de proyectos';
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(){
    this._projectService.getProjects().subscribe({
      next: (response: any) => {
        if(response.projects){
          this.projects = response.projects;
        }
      },
      error: (err: any) => {
        console.log(<any>err);
      }
    });
  }

}
