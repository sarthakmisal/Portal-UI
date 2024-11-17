import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/exam/category.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  quizzs: any
  constructor(private cService: CategoryService, private uService: UserService) {
    this.cService.getCategories().subscribe({
      next: data => { this.quizzs = data;console.log(data);
       },
      error: err => console.log(err)
    })
  }
  logOut() {
    this.uService.logOut()
  }
}
