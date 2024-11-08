import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private uService: UserService,private router:Router) { }
  user: any = {
    "fname": "",
    "lname": "",
    "username": "",
    "password": "",
    "email": "",
    "phone": ""
  }
  handleSubmit() {
    if(!this.user.username) {alert("Username is required");return;}
    this.uService.addUser(this.user).subscribe({
      next: (data) => {
        Swal.fire({
          title: 'Saved!',
          text: 'User saved successfully.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        this.user = {
          "fname": "",
          "lname": "",
          "username": "",
          "password": "",
          "email": "",
          "phone": ""
        }
        this.router.navigate(["login"])
        
      },
      error: (err) => {
        if (err.status === 400||err.status===500) {
          Swal.fire({
            title: 'Error!',
            text: 'Username already exists.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        } else if(err.status==200||err.status==201){
          Swal.fire({
            title: 'Saved!',
            text: 'User saved successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
          });
        }else {
          Swal.fire({
            title: 'Error!',
            text: 'Error saving data.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
        console.error(err);
      }
    });
  }
}
