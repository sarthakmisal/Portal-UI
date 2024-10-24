import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portal-UI';
  removeEle(e:any){
    this.users.splice(e,1)
  }
  
  users:any=[]
  
user:any ={name:"sam",mail:"rama@hotmail"}
Insert(name:any,phone:any){
  console.log(this.users)
  this.users.push({"name":name.value,"phone":phone.value})
}
}
