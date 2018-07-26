import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, share } from 'rxjs/operators';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-ng-if-home',
  templateUrl: './ng-if-home.component.html',
  styleUrls: ['./ng-if-home.component.css']
})
export class NgIfHomeComponent implements OnInit {

  simpleIfElse = true;
  randomNumber$: Observable<number>;

  constructor() { }

  ngOnInit() {
    // https://coryrylan.com/blog/angular-async-data-binding-with-ng-if-and-ng-else
    this.startAsyncData();
  }

  getAsyncData(): Observable<number> {
    return of(
      Math.floor(Math.random() * 10) + 1
    ).pipe(
      delay(this.randomSeconds())
    );
  }

  startAsyncData() {
    this.randomNumber$ = this.getAsyncData();
  }

  private randomSeconds(): number {
    const ms = Math.floor(Math.random() * 5) + 1;
    return ms * 1000;
  }
}
