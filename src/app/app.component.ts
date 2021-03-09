import { Component } from '@angular/core';
import {User} from './app.model';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alta de Usuarios';
  UserComponent : User = new User();
  constructor(private apiService:AppService) {};
  message:string =""; 
  
  AddUser(){
    console.log(this.UserComponent);
    this.apiService.addPerson(this.UserComponent)
      .subscribe(data => {
        console.log(data);   
        this.message = data.data.message;   
        this.UserComponent = new User(); 
      })     
  }
}
