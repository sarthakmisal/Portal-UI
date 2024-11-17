import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/exam/question.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-question',
  templateUrl: './manage-question.component.html',
  styleUrls: ['./manage-question.component.css']
})
export class ManageQuestionComponent {
  ques: any
  constructor(public login: UserService, private qService: QuestionService, public aRoute: ActivatedRoute) {
    this.getQuestions(this.aRoute.snapshot.params['qzid'])
  }
  removeQuestion(qid: any) {
    // alert(this.aRoute.snapshot.params["id"])
    this.qService.removeQuestion(qid, this.aRoute.snapshot.params["qzid"]).subscribe({
      next: (data) => { Swal.fire("Question Deleted"); this.getQuestions(this.aRoute.snapshot.params['qzid']);},
      error: (err) => { Swal.fire("Cannot Delete Question"); this.getQuestions(this.aRoute.snapshot.params['qzid']); }
    })
  }
  getQuestions(id: any) {
    this.qService.getQuizQuestions(id).subscribe({
      next: (data) => { this.ques = data; console.log(data) },
      error: (data) => console.log("Unable to fetch Questions)")
    })
  }
  updateQuestion(id: any) {
    // alert('updating'+id)
    this.qService.removeQuestion(this.ques, id).subscribe({
      next: (data) => { Swal.fire("Question Updated") },
      error: (err) => { Swal.fire("Cannot Update Question") }
    })
  }
  handleSubmit() {

  }
}
