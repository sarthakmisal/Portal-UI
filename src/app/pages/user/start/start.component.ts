import { LocationStrategy } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/exam/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {
  qzid: any
  questions: any;
  isSubmit: boolean = false
  time: any
  percentage: any = 100
  remaining: any
  analytics: any = { "attempted": 0, "correct": 0, "totalMarks": 0 }
  constructor(private router: Router, private locationSt: LocationStrategy, private route: ActivatedRoute, private qService: QuestionService) {
    this.preventBackButton();
    this.qzid = route.snapshot.params["id"]
    this.loadQuestions(this.qzid);
    this.startTimer()
  }
  startTimer() {
    let t = setInterval(() => {
      if (this.remaining <= 0) {clearInterval(t);this.TimeUp()}
      else { this.remaining--; 
        this.percentage = Math.round((this.remaining / this.time) * 100);
      }
    }, 1000);
  }
  TimeUp(){
    Swal.fire("Time up Submitting....")
    this.isSubmit=true
    this.calcQuiz()
  }
  loadQuestions(id: any) {
    this.qService.getQuestionsOnly(id).subscribe({
      next: data => {
        this.questions = data;
        this.time = this.remaining = this.questions.length * 5*60
        this.filterData(this.questions)
      },
      error: err => console.log({ "SARTHAK": err })
    })
  }
  handleFinish(txt = "Do you want to Submit the quiz?",load=true) {
    Swal.fire({
      title: txt,

      showCancelButton: true,
      confirmButtonText: `End`,
      denyButtonText: `Cancel`,
      icon: 'info',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        // this.router.navigate(['/start/' + qid]);
        this.isSubmit = true
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
    // console.log(this.questions);
    this.calcQuiz()  
    console.log(this.analytics);

  }
  calcQuiz(){
    this.questions.forEach((element: any) => {
      if (element.attempted) this.analytics.attempted++;
      if (element.attempted === element.answer) {
        this.analytics.correct++;
        this.analytics.totalMarks += 100 / element.quiz.no_Of_Que;
      }
    });
    // this.qService.saveTest(this.)
  }
  filterData(data: any) {
    JSON.parse(JSON.stringify(data)).map((ele: any) => { ele.attempted = ""; })
  }
  preventBackButton() {
    history.pushState(null, "null", location.href);
    this.locationSt.onPopState(() => {
      history.pushState(null, "null", location.href);
      history.pushState(null, "back", location.href)
    });
  }
}

