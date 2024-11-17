import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { AddQuizComponent } from './add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './update-quiz/update-quiz.component';
import { ManageQuestionComponent } from './manage-question/manage-question.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { AddQuizQuestionComponent } from './add-quiz-question/add-quiz-question.component';

@NgModule({
  declarations: [
    // QuizzesComponent,
    // AddQuizComponent,
  
    // UpdateQuizComponent
  
    // ManageQuestionComponent
  
    // AddQuestionComponent,
    // AddQuizQuestionComponent
  ],
  imports: [
    CommonModule, FormsModule
  ]
})
export class AdminModule { }
