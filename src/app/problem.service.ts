import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Problem } from './model.problem';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProblemService {

  constructor(private httpClient:HttpClient) { }

  loadProblemDetails():Observable<Problem[]>{
    return this.httpClient.get<Problem[]>("http://localhost:3000/problem");
  }
}
