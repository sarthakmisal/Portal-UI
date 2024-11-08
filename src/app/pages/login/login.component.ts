import { Component } from '@angular/core';
import { retry } from 'rxjs';
import base_url from 'src/app/services/helper';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private uService: UserService) { }
  username: any;
  pass: any;
  user: any = {
    username: "",
    password: ""
  }

  handleLogin() {
    if (!this.user.username) { this.username = "danger"; return }
    else { this.username = ""; this.pass = "" }
    if (!this.user.password) { this.pass = "danger"; return; }
    else this.pass = ""



    this.uService.loginUser(this.user).subscribe({
      next: data => {
        console.log("success");
        // console.log(data)
        if (!isNaN(JSON.parse(JSON.stringify(data)).Error)) throw new Error("Failed");

        localStorage.setItem("token", JSON.parse(JSON.stringify(data)).token)
        localStorage.setItem("user", JSON.parse(JSON.stringify(data)).user)
      },
      error: err => {
        console.log("Failed");
        console.log(err);

      }
    })

    this.uService.getUser(localStorage.getItem("user") || "").subscribe({
      next: data => {
        localStorage.setItem("cUser", JSON.stringify(data))
        // alert(data.profile)
        if (data.profile == "Admin") {
          Swal.fire({
            title: 'Welcome Admin!',
            text: 'Token Generated successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
          });
          window.location.href = '/admin'
        }
        else if (data.profile === "Normal") {
          Swal.fire({
            title: 'Welcome User!',
            text: 'Explore Platform.',
            icon: 'success',
            confirmButtonText: 'OK'
          });
          window.location.href = '/user';
        }
        else {
          this.uService.logOut()
        }
      },
      error: err => {
        Swal.fire({
          title: JSON.parse(JSON.stringify(err)).message.substring(0, 21).toUpperCase(),
          text: 'Cannot validate user.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
        this.user = ""
        // console.log()
      }
    })
  }
}
