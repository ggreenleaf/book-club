import { Component, OnInit, OnDestroy } from '@angular/core';
import { SiblingComponentService } from 'src/app/core/services/sibling-component.service';
import { Subscription } from '../../../../../node_modules/rxjs';

@Component({
  selector: 'app-sibling-one',
  templateUrl: './sibling-one.component.html',
  styleUrls: ['./sibling-one.component.css']
})
export class SiblingOneComponent implements OnInit, OnDestroy {
  subjectSub: Subscription;
  behaviorSub: Subscription;
  subjectCounter: number = 0;
  behaviorSubjectCounter: number;

  constructor(private siblingComponentService: SiblingComponentService) { }

  ngOnInit() {

  }

  ngOnDestroy() {
    if (this.subjectSub) {
      this.subjectSub.unsubscribe();
    }
    if (this.behaviorSub) {
      this.behaviorSub.unsubscribe();
    }
  }

  subscribeToSubject() {
    this.subjectSub = this.siblingComponentService.countSubject$.subscribe((counter) => {
      this.subjectCounter = counter;
    });
  }

  subscribeToBehaviorSubject() {
    this.behaviorSub = this.siblingComponentService.countBehavoirSubject$.subscribe((counter) => {
      this.behaviorSubjectCounter = counter;
    })
  }

  nextSubjectValue() {
    const nextValue = this.subjectCounter + 1;
    this.siblingComponentService.sendSubjectUpdate(nextValue);
  }

  nextBehaviorSubjectValue() {
    const nextValue = this.behaviorSubjectCounter + 1;
    this.siblingComponentService.sendBehaviorSubjectUpdate(nextValue);
  }

}
