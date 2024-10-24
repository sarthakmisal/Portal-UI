import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import base_url from './helper';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  addUser(user: any) {
    return this.http.post(`${base_url}create`, user)
  }
  loginUser(user:any){
    return this.http.get(`${base_url}name`, {
      params: {
        username: user.username,
        password: user.password
      }
    });
  }
}