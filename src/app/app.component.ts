import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService]
})
export class AppComponent implements OnInit{
  public title = 'proyecto-angular';
  // public adminLoged: boolean;

  constructor(
    private _userService: UserService,
    private __router: Router
  ){
    
  }


  ngOnInit(): void {
  }


}
