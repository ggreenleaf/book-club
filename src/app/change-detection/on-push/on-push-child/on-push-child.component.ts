import { 
  Component, 
  OnInit, 
  OnChanges,
  SimpleChanges,
  SimpleChange,
  Input, 
  ChangeDetectionStrategy} from '@angular/core';
  import { ILog } from '../../../interfaces/log-interface';

@Component({
  selector: 'app-on-push-child',
  templateUrl: './on-push-child.component.html',
  styleUrls: ['./on-push-child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushChildComponent implements OnInit {
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

  resetCountObject() {
    this.countObject = {value: 0};
  }

  resetCount() {
    this.count = 0;
  }
  
  clearLogs() {
    this.changes = []
  }

}
