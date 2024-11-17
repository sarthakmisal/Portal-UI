import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { SignupComponent } from 'src/app/pages/signup/signup.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './pages/user/dashboard/dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { UserGuard } from './services/user.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { CategoriesComponent } from './pages/admin/categories/categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { QuizzesComponent } from './pages/admin/quizzes/quizzes.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ManageQuestionComponent } from './pages/admin/manage-question/manage-question.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { AddQuizQuestionComponent } from './pages/admin/add-quiz-question/add-quiz-question.component';

const routes: Routes = [
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "signup", component: SignupComponent, pathMatch: "full" },
  {
    path: "admin", component: AdminDashboardComponent, children: [
      { path: "profile", component: ProfileComponent, canActivate: [AdminGuard] },
      { path: "categories", component: CategoriesComponent, canActivate: [AdminGuard] },
      { path: "add_category", component: AddCategoryComponent, canActivate: [AdminGuard] },
      { path: "quizzes", component: QuizzesComponent, canActivate: [AdminGuard] },
      { path: "add_quiz", component: AddQuizComponent, canActivate: [AdminGuard] },
      { path: "update_quiz/:id", component: UpdateQuizComponent, canActivate: [AdminGuard] },
      { path: "manage_questions/:qzid", component: ManageQuestionComponent, canActivate: [AdminGuard] },
      { path: "add_question/:qzid", component: AddQuizQuestionComponent, canActivate: [AdminGuard] },
      { path: "add_question", component: AddQuestionComponent, canActivate: [AdminGuard] },
      { path: "logout", component: ProfileComponent, canActivate: [AdminGuard] },
    ],
    canActivate: [AdminGuard]
  },
  { path: "", component: DashboardComponent, pathMatch: "full", canActivate: [UserGuard] ,children:[
    
  ]},
  { path: "user", redirectTo: "", pathMatch: "full", canActivate: [UserGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
