import { Component } from '@angular/core';
import base_url from 'src/app/services/helper';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private uService:UserService){}
  user:any={
    username:"",
    password:""
  }
  handleLogin(){
    this.uService.loginUser(this.user)
  }
}
