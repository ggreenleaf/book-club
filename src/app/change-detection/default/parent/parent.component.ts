import { 
  Component, 
  OnInit, 
  OnChanges,
  SimpleChanges,
  SimpleChange,
  Input } from '@angular/core';

interface log {
  previousValue: any;
  currentValue: any;
  isFirstChange: boolean;
  propName: string;
}

@Component({
  selector: 'app-default-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  count = 0;
  countObject: {value: number} = {value: 0};
  changes: log[] = [];
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
}
