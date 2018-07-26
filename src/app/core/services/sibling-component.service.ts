import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiblingComponentService {
  countSubject$: Subject<number>;
  countBehavoirSubject$: BehaviorSubject<number>;
  
  constructor() {
    this.countSubject$ = new Subject();
    this.countBehavoirSubject$ = new BehaviorSubject(1);
  }

  sendSubjectUpdate(number) {
    this.countSubject$.next(number);
  }

  sendBehaviorSubjectUpdate(number) {
    this.countBehavoirSubject$.next(number);
  }

}
