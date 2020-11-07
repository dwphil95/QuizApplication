import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizComponent } from '../quiz/quiz.component';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  msg: string
  totalPointsEarned: number
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.totalPointsEarned = QuizComponent.score * 10
    this.displayRelevantMessage()
  }

  displayRelevantMessage() {
      this.msg = (this.totalPointsEarned == 100) ? "I'm genuinely impressed, you got them all right...I should have made this quiz harder."
        : "Which questions did you get wrong? The world will never know...try again to find out!"
  }

  tryAgain() {
    this.router.navigate(["/quiz"], { relativeTo: this.route });
  }
}
