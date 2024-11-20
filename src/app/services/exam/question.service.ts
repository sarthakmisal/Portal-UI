import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private base_url = "http://[::1]:5500/";
  constructor(private http: HttpClient) { }
  getQuestions(){
    return this.http.get(`${this.base_url}question/get`)
  }
  getQuizQuestions(id:any){
    return this.http.get(`${this.base_url}question/quiz/${id}`)
  }
  saveQuestion(que:any){
    return this.http.post(`${this.base_url}question/create`,que)
  }
  updateQuestion(que:any,id:any){
    return this.http.put(`${this.base_url}question/update/${id}`,que)
  }
  deleteQuestion(id:any){
    return this.http.delete(`${this.base_url}question/delete/${id}`)
  }
  removeQuestion(q_id:any,id:any){
    return this.http.put(`${this.base_url}question/removeQuestion/${id}`, {"q_id":q_id})
  }

  // CALLED ONLY AFTER TEST IS CALLED
  getQuestionsOnly(id:any){
    return this.http.get(`${this.base_url}question/getQuestionsOnly/${id}`)
  }
}
