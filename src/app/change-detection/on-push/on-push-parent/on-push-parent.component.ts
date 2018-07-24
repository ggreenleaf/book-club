import { Component, 
  OnInit,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges
 } from '@angular/core';
import { ILog } from '../../../interfaces/log-interface';
@Component({
  selector: 'app-on-push-parent',
  templateUrl: './on-push-parent.component.html',
  styleUrls: ['./on-push-parent.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class OnPushParentComponent implements OnInit, OnChanges {
  count = 0;
  countObject: {value: number} = {value: 0};
  changes: ILog[] = [];
  randomNumber: number = null;

  constructor() { }

  ngOnChanges(simpleChanges: SimpleChanges) {
    
    for(const key in simpleChanges) {
      const change = simpleChanges[key]
      const newLog = {
        previousValue: change.previousValue,
        currentValue: change.currentValue,
        isFirstChange: change.isFirstChange(),
        propName: key
      }  
      this.changes.push(newLog);
    }
  }

  ngOnInit() {
    this.count = 0;
    this.countObject = {value: 0}
  }

  updateCount() {
    this.count += 1;
  }

  updateCountObject() {
    this.countObject.value += 1;
  }
  
  resetCountObject() {
    this.countObject = {value: 0};
  }
  
  resetCount() {
    this.count = 0;
  }

  clearLogs() {
    this.changes = [];
  }

  setRandomNumber(randNum: number) {
    this.randomNumber = randNum;
  }
}
