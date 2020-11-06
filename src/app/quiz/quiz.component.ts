import { Component, OnInit } from '@angular/core';
import { Problem } from '../model.problem';
import { ProblemService } from '../problem.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private problemService:ProblemService) { }

  problems: Problem[]

  ngOnInit(): void {
    this.problemService.loadProblemDetails().subscribe(data=>this.problems=data);
  }

  gradeQuiz(): void{
    var correct = 0
    var choices = document.getElementsByTagName("input")
    for (var i = 0; i < this.problems.length; i++) {
      for (var j = i * 4; j < (i * 4) + 4; j++) {
        if (choices[j].checked && choices[j].value == this.problems[i]["answer"])
          correct++;
      }
    }
    console.log(correct + "/10  correct!")  
  }
}
