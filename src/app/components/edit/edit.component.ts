import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { Global } from 'src/app/services/global';
import { Project } from 'src/app/models/project';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [ProjectService, UploadService, UserService]
})
export class EditComponent implements OnInit {
  public url: string;
  public title:string;
  public project: any;
  public status: any;
  public save_project: any;
  public filesToUpload: Array<File> = [];
  public edit: boolean;
  public userLoged: boolean;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ){
    this.title = 'Editar proyecto';
    this.url = Global.url;
    this.edit = true;
    this.userLoged = false;
  }

  ngOnInit(): void {
    if(!this._userService.verifyUserCookie()){
      this._router.navigateByUrl("/");
    }else{
      this.userLoged = true;
    }

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
      error: (err: any) => {
        console.log(<any>err); 
      }
    });
  }

  onSubmit(form: any){
    this._projectService.updateProject(this.project).subscribe({
      next: (response: any) => {
        if(response.project){
          if(this.filesToUpload){
            this._uploadService.makeFileRequest(Global.url+'upload-image/'+response.project._id, this.filesToUpload, 'image')
            .then((result: any) => {
              this.save_project = result.project;
              this.status = 'success';
              this.refresh();
            }); 
          }else{
            this.save_project = response.project;
            this.status = 'success';
          }
        }else{
          this.status = 'failed';
        }
      },
      error: (err: any) => {
        console.log(<any>err);
        
      }
    });
  }

  fileChanged(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files
  }

  refresh(): void {
     window.location.reload(); 
  }

}
