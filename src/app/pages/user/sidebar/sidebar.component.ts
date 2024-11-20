import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/exam/category.service';
import { QuizService } from 'src/app/services/exam/quiz.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  categories: any
  constructor(private cService: CategoryService, private uService: UserService,private qService:QuizService,private route:ActivatedRoute,private router:Router) {
    this.getCategories();
  }
  getCategories(){
    this.cService.getCategories().subscribe({
      next: data => {
        this.categories = data; 
        // console.log(data);
      },
      error: err => console.log(err)
    })
  }
  reflectQuizzs(id:any){
    this.router.navigate([id]);
    // this.router
    // this.loadQuizzes(id)
  }
 
  logOut() {
    this.uService.logOut()
  }
}
