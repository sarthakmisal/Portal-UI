import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public login: UserService, private router: Router) {}
  // us:any
  public loginStatus: boolean = (localStorage.getItem("token") === null || localStorage.getItem("token") === "")
  logOut() {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    localStorage.removeItem("cUser")
    this.loginStatus = false
    this.router.navigate(["login"])
  }
}