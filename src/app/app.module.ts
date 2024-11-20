import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './pages/user/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { CategoriesComponent } from './pages/admin/categories/categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { QuizzesComponent } from './pages/admin/quizzes/quizzes.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ManageQuestionComponent } from './pages/admin/manage-question/manage-question.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { AddQuizQuestionComponent } from './pages/admin/add-quiz-question/add-quiz-question.component';
import { SidebarComponent as Sidebar } from './pages/user/sidebar/sidebar.component';
import { QuizzesComponent as Quizzes } from './pages/user/quizzes/quizzes.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { StartComponent } from './pages/user/start/start.component';
import { LoaderComponent } from './pages/user/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    AdminDashboardComponent,
    DashboardComponent,
    ProfileComponent,
    SidebarComponent,
    CategoriesComponent,
    AddCategoryComponent,
    AddQuizComponent,
    QuizzesComponent,
    UpdateQuizComponent,
    ManageQuestionComponent,
    AddQuestionComponent,
    AddQuizQuestionComponent,
    Sidebar,
    Quizzes,
    InstructionsComponent,
    StartComponent,
    LoaderComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxUiLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
