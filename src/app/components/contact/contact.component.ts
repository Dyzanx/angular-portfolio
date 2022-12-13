import { Component, OnInit } from '@angular/core';
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

@Component({  
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public title: string;
  public subject: any;
  public sendTo: string;
  public email: any;
  public message: any;

  constructor() {
    this.title = "Contactate con el programador";
    this.sendTo = "andresorozco1206@gmail.com";
   }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(this.subject);
  }


}
