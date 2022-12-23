import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/services/global';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  providers: [ProjectService, UserService]
})
export class DetailComponent implements OnInit {
  public url: string;
  public project: any;
  public confirm: boolean;
  public userLoged: boolean;

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _userService: UserService
  ){
    this.url = Global.url;
    this.confirm = false;
    this.userLoged = false;
  }

  ngOnInit(): void {
    this._route.params.subscribe(
      (params: any) => {
        let id = params.id;
        this.getProject(id);
      }
    );

    if(this._userService.verifyUserCookie()){
      this.userLoged = true;
    }
  }

  setConfirm(confirm: boolean){
    this.confirm = confirm;
    window.scroll({
      top: 0
    });
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

  deleteProject(id: any){
    this._projectService.deleteProject(id).subscribe({
      next: (response: any) => {
        if(response.project){
          this._router.navigate(['/proyectos']);
        }
      },
      error: (err: any) => {
        console.log(<any>err);
        
      }
    });
  }

}
