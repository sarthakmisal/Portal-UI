import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/exam/category.service';
import { QuizService } from 'src/app/services/exam/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent {

  private base_url = "http://[::1]:5500/category";

  public quizzes: any
  public categories: any
  constructor(private qzService: QuizService, private cService: CategoryService) {
    this.qzService.getQuizzes().subscribe({
      next: (data) => {
        this.quizzes = data; console.log(data);
      },
      error: (err) => console.log({ "ERROr": err })
    })
    this.cService.getCategories().subscribe({
      next: (data) => {
        this.categories = data; console.log(data);
      },
      error: (err) => console.log({ "ERROr": err })
    })
  }

  cat: any = {
    "title": "", "description": "", "no_Of_Que": "", "marks_per": "", "category": {
      "cat_id": "",
      "title": "",
      "description": ""
    }
  };
  username: any;
  pass: any;
  handleSubmit() {
    if  (!this.cat.title) return Swal.fire("Title is mandatory");
    if  (!this.cat.description) return Swal.fire("Description is also mandatory");
    if  (!this.cat.no_Of_Que) return Swal.fire("Number of Questions is also mandatory");
    if  (!this.cat.category) return Swal.fire("Category is also mandatory");
    if  (!this.cat.marks_per) return Swal.fire("Marks is also mandatory");
    console.log(this.cat);

    this.qzService.saveQuiz(this.cat).subscribe({
      next: (dat) => {
        Swal.fire({
          title: this.cat.title + ' Saved!',
          text: 'Quiz saved successfully.',
          icon: 'success',
          confirmButtonText: 'OK'
        });

      },
      error: (err) => {
        Swal.fire({
          title: 'Error!',
          text: 'Cannot add Quizz.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    })
    return true;
  }
}
