import { Component } from '@angular/core';
import { QuestionService } from 'src/app/services/exam/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz-question',
  templateUrl: './add-quiz-question.component.html',
  styleUrls: ['./add-quiz-question.component.css']
})
export class AddQuizQuestionComponent {
  constructor(private qService:QuestionService){
    this.getQuestions()
  }
question:any={}
questions:any
getQuestions(){
  this.qService.getQuestions().subscribe({
    next:(data)=>{this.questions=data;console.log(data);
    },
    error: err => {console.log(err); console.log(err);}
  })
}
handleSubmit(){
  alert(JSON.stringify(this.question.length))
  if(this.question.length!=1) Swal.fire("You Must select a Question")
}
}
