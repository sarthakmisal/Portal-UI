import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



import base_url from './helper';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  addUser(user: any) {
    return this.http.post(`${base_url}create`, user)
  }
  loginUser(user: any) {
    return this.http.post(`${base_url}generate_token`, {
      username: user.username,
      password: user.password
    });
  }
  // getUser(us: string) {
  //   var user = this.http.post(`${base_url}get_user_details`, us)
  //   // console.log("fromService")
  //   // console.log(user)
  //   return user
  //   // return (user === null || user === undefined) ? (this.logOut()) : JSON.parse(JSON.stringify(user))
  // }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("cUser") || "{}").profile
  }
  getUser(us: string): Observable<any> {
    return this.http.post<any>(`${base_url}get_user_details`, { username: us });
  }
  isLoggedIn() {
    const token = localStorage.getItem("token")
    return (token === undefined || token === null || token === "") ? false : true
  }
  logOut() {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    localStorage.removeItem("cUser")
    return null
  }
  getFullName() {
    const ur = JSON.parse(localStorage.getItem("cUser") || "")
    return ur.fname + " " + ur.lname
  }
  getToken() {
    return localStorage.getItem("token")
  }
  saveUser(user: any) {
    localStorage.setItem("user", JSON.stringify(user))
  }

}