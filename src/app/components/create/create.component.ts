import { Project } from './../../models/project';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {
  public title:string;
  public project: Project;
  public status: any;
  public save_project: any;
  public filesToUpload: Array<File> = [];
  public url: string;
  public year: any;
  public githubUrl: any;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
  ){
    this.year = new Date().getFullYear();
    this.title = 'Agregar proyecto';
    this.project = new Project('', '', '', '', '', this.year, '', '');
    this.url = Global.url;
  }

  ngOnInit(): void {
    
  }

  onSubmit(form: any){
    // Guardar los datos
    this._projectService.saveProject(this.project).subscribe({
      next: (response) => { 
        if(response.project){
          this._uploadService.makeFileRequest
          (Global.url+'upload-image/'+response.project._id, this.filesToUpload, 'image')
          .then((result: any) => {
            this.save_project = result.project;
            this.status = 'success';
            form.reset();
          }); 
        }else{
          this.status = 'failed';
        }
      },
      error: (err) => {
        console.log(<any>err);
      }
    });
  }

  fileChanged(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files
  }

}