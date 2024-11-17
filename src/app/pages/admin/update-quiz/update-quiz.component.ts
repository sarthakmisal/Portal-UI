import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/exam/category.service';
import { QuizService } from 'src/app/services/exam/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent {
  private base_url = "http://[::1]:5500/";

  public quizz: any
  public categories: any
  constructor(private qzService: QuizService,private route:ActivatedRoute, private cService: CategoryService) {
    this.getQuiz(this.route.snapshot.params['id'])
    this.getCategories()
  }
  getQuiz(id:any){
    this.qzService.getQuiz(id).subscribe({
      next: (data) => {
        this.quizz = data; console.log(data);
      },
      error: (err) => console.log({ "ERROr": err })
    })
  }
  getCategories(){
    this.cService.getCategories().subscribe({
      next: (data) => {
        this.categories = data; console.log(data);
      },
      error: (err) => console.log({ "ERROr": err })
    })
  }
  toggleStatus(){
    this.quizz.status=this.quizz.status==="active"?"inactive":"active";
  }
  handleUpdate() {

    if (!this.quizz.title) return Swal.fire("Title is mandatory");
    if (!this.quizz.description) return Swal.fire("Description is also mandatory");
    if (!this.quizz.no_Of_Que) return Swal.fire("Number of Questions is also mandatory");
    if (!this.quizz.category) return Swal.fire("Category is also mandatory");
    // console.log(this.quizz);

    this.qzService.updateQuiz(this.quizz,this.route.snapshot.params['id']).subscribe({
      next: (dat) => {
        Swal.fire({
          title: this.quizz.title + ' Updated!',
          text: 'Quiz updated successfully.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        // console.log(dat);
      },
      error: (err) => {
        Swal.fire({
          title: 'Error!',
          text: 'Cannot update Quizz.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
        // console.log(err);
      }
    })
    return true;
  }
  // cat: any = {
  //   "title": "", "description": "", "no_Of_Que": "", "category": {
  //     "cat_id": "",
  //     "title": "",
  //     "description": ""
  //   }
  // };
}
