import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/services/global';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  providers: [ProjectService]
})
export class DetailComponent implements OnInit {
  public url: string;
  public project: any;

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe(
      (params: any) => {
        let id = params.id;
        this.getProject(id);
      }
    );
  }

  getProject(id: any){
    this._projectService.getProject(id).subscribe({
      next: (response: any) => {
        this.project = response.project;
      },
      error: (err) => {
        console.log(<any>err);
        
      }
    });
  }

}
