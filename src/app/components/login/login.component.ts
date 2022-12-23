import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

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
  public userData: any;

  constructor(
    private _userService: UserService,
    private _router: Router
  ){
    this.title = "Iniciar sesión";
  }

  onSubmit(form: any){
    // console.log("----------------------------------------------------");
    
    if(this.id && this.password){
      this._userService.getUser(this.id, this.password).subscribe({
        next: (response: any) => {
          this.user = response.userData[0];

          if(this.user.role == "admin"){
            this.cookieValue = {
              id: this.user._id,
              role: this.user.role,
              name: this.user.name,
              email: this.user.email,
              password: this.user.password
            };
            // console.log(this.cookieValue);
            document.cookie = "user="+JSON.stringify(this.cookieValue);
            if(this._userService.verifyUserCookie()){
              this.id = "";
              this.password = "";
              console.log("user loged in");

              this._router.navigateByUrl("/");
            }
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