import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService]
})
export class LoginComponent{
  public title: string;
  public id: any;
  public password: any;
  public user: any;
  public cookieValue: any;

  constructor(
    private _userService: UserService
  ){
    this.title = "Iniciar sesión";
  }

  onSubmit(form: any){
    console.log("sent");
    
    if(this.id && this.password){
      this._userService.getUser(this.id, this.password).subscribe({
        next: (response: any) => {
          this.user = response.userData[0];
          console.log(this.user);

          if(this.user.role == "admin"){
            this.cookieValue = "id="+this.id+"; userRole="+this.user.role+"; userEmail="+this.user.email+"; userName="+this.user.name+" max-age=86400; path=/";
            // console.log(this.cookieValue);
            document.cookie = this.cookieValue;
          }else{
            console.log("No tienes accesso a la web");
          }
        },
        error: (err) => {
          console.log(<any>err);
          
        }
      });
    }else{
      console.log("Invalid credentiasl");
    }

  } 
}
