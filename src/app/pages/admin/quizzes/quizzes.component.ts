import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/services/exam/quiz.service';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent {

  public quizzes: any
  constructor(public login: UserService,private cService: QuizService,private router:Router) {
    this.getQuiz()
  }
  manageQuestions(id:any){
    this.router.navigate([`admin/manage_questions/${id}`])
  }
  getQuiz(){
    this.cService.getQuizzes().subscribe({
      next: (data) => this.quizzes = data,
      error: (err) => console.log({ "ERROr": err })
    })
  }
  updateQuiz(id:any){
    if (confirm("Are you sure ?")) {
      this.router.navigate([`admin/update_quiz/${id}`])
    }

  }
  deleteQuiz(id: any) {
    if (confirm("Are you sure ?")) {
      this.cService.deleteQuiz(id).subscribe({
        next: (data) => {Swal.fire("Deleted QUiz successfully!!");this.getQuiz();
        },
        error: (err) => {Swal.fire("Unable to Delete QUiz");this.getQuiz();
        }
      })
    }
  }
}
