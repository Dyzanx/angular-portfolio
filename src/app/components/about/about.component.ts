import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [UserService]
})
export class AboutComponent implements OnInit {
  public title: String;
  public subtitle: String;
  public email: String;
  public isLoged: boolean;

  constructor(
    private _userService: UserService,
  ){
    this.title = 'Edison Andres Orozco Pulgarin';
    this.subtitle = 'Aspirante a fullsatck';
    this.email = 'andresorozco1206@gmail.com';
    this.isLoged = false;
   }

  ngOnInit(): void {
    if(this._userService.verifyUserCookie()){
      this.isLoged = true;
    }
  }

  // logout(){
    // this._userService.deleteUserCookie();
  // }

}
