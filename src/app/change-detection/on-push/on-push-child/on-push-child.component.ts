import { 
  Component, 
  OnInit, 
  OnChanges,
  SimpleChanges,
  SimpleChange,
  Input, 
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Output,
  EventEmitter} from '@angular/core';
  import { ILog } from '../../../interfaces/log-interface';

/**
 * In this Child component we use an on push change detection strategy meaning
 * Change detection won't fire for this component and its children unless the reference 
 * of its input changes for example if you increment the counter for the counter  Object
 * you will not see the view re redender for the child because the reference isnt changed
 * only when you click the new counter reference will the on change fire and reflect in the view. 
 */


@Component({
  selector: 'app-on-push-child',
  templateUrl: './on-push-child.component.html',
  styleUrls: ['./on-push-child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushChildComponent implements OnInit {
  @Input() count: number;
  @Input() countObject: {value: number}
  @Output() randomNumber = new EventEmitter<number>();
  changes: ILog[]= [];

  constructor(private cd: ChangeDetectorRef) { }

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

  newCountObject() {
    this.countObject = {value: 0};
  }

  resetCount() {
    this.count = 0;
  }
  
  clearLogs() {
    this.changes = []
  }

  markForCheck() {
    // mainly used when your change detection strategy is OnPush
    this.cd.markForCheck();
  }

  fireEvent() {
    this.randomNumber.emit(Math.random());
  }

}
