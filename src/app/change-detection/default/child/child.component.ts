import { 
  Component, 
  OnInit, 
  OnChanges,
  SimpleChanges,
  SimpleChange,
  Input } from '@angular/core';
  import { ILog } from '../../../interfaces/log-interface';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() count: number;
  @Input() countObject: {value: number}
  changes: ILog[]= [];
  constructor() { }

  ngOnInit() {
  }

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

  updateCountObjectInChild() {
    this.countObject.value += 1;
  }

  updateCountInChild() {
    this.count += 1;
  }

  clearLogs() {
    this.changes = []
  }
  
  resetCount() {
    this.count = 0;
  }

  newCountObject() {
    this.countObject = {value: 0};
  }
}
