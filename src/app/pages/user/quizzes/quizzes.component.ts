import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { QuizService } from 'src/app/services/exam/quiz.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent {
  quizzes: any = [];
  private firstLoad: boolean = true; // Flag for first load

  constructor(
    protected login: UserService,
    private qService: QuizService,
    private route: ActivatedRoute,
    private ngxService: NgxUiLoaderService
  ) {
    // Subscribe to route parameter changes
    this.ngxService.start()
    this.route.params.subscribe(params => {
      const id = params['id'] || 0;
      this.loadQuizzes(id);
      this.ngxService.stopBackground()
      this.ngxService.stop()
    });
  }

  loadQuizzes(id: any) {
    if (this.firstLoad) {
      id = 0; // Force id=0 only on the first load
      this.firstLoad = false; // Disable first load flag
    }

    if (id != 0) {
      this.qService.getQuizzesByCat(id).subscribe({
        next: data => {
          this.quizzes = this.filterData(data);
          // console.log(data);
        },
        error: err => {
          console.log({ "SARTHAK": err });
        }
      });
    } else {
      this.qService.getQuizzes().subscribe({
        next: data => {
          this.quizzes = this.filterData(data);
        },
        error: err => {
          console.log({ "SARTHAK": err });
        }
      });
    }
  }
  filterData(data: any) {
    return JSON.parse(JSON.stringify(data)).filter((ele: any) => ele.status === "active");
    // this.quizzes =JSON.parse(JSON.stringify(data)).filter((ele:any)=>ele.status==="active");
    //   this.quizzes = this.quizzes.filter((e: any) =>{ e.status === "active";console.log(e);
    //   })
  }
}
