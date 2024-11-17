import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private base_url = "http://[::1]:5500/";
  constructor(private http: HttpClient) { }

  getQuizzes() {
    return this.http.get(`${this.base_url}quiz/get`)
  }
  saveQuiz(quiz: any) {
    return this.http.post(`${this.base_url}quiz/create`, quiz)
  }
  deleteQuiz(id:any){
    return this.http.delete(`${this.base_url}quiz/delete/${id}`)
  }
  getQuiz(id:any){
    return this.http.get(`${this.base_url}quiz/getq/${id}`)
  }
  updateQuiz(cat:any,id:any){
    return this.http.put(`${this.base_url}quiz/update/${id}`,cat)
  }
}
