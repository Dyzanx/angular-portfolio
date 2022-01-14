import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public title: String;
  public subtitle: String;
  public email: String;

  constructor(){
    this.title = 'Edison :^';
    this.subtitle = 'Aspirante a fullsatck';
    this.email = 'andresorozco1206@gmail.com';
   }

  ngOnInit(): void {
  }

}
