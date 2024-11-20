import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/exam/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent {
  quiz:any
  agree:boolean=false
  constructor(private route:ActivatedRoute,private qService:QuizService,private _router:Router) { 
    this.quiz=qService.getQuiz(this.route.snapshot.params["id"]).subscribe({
      next:(data:any)=>this.quiz=data,
      error:(err:any)=>console.log({"SARTHAK":err})
      
    })
  } 
  startQUiz(qid:any){

    Swal.fire({
      title: 'Do you want to start the quiz?',

      showCancelButton: true,
      confirmButtonText: `Start`,
      denyButtonText: `Don't save`,
      icon: 'info',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this._router.navigate(['/start/' +qid]);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });

  }
}
