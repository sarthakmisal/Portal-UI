import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
user:any="hello"
constructor(private userService:UserService){
  this.user = JSON.parse(localStorage.getItem('cUser')||"")
}

}
