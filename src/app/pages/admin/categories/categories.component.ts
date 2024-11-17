import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/exam/category.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  public categories:any
  constructor(private cService: CategoryService, public login: UserService){
    this.getCategories()
  }
  getCategories(){
    this.cService.getCategories().subscribe({
      next: (data) => this.categories = data,
      error: (err) => console.log({ "ERROr": err })
    })
  }
}
