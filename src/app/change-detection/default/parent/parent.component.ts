import { Component, OnInit} from '@angular/core';
import { ILog } from '../../../interfaces/log-interface';

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
  changes: ILog[] = [];
  constructor() { }

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

  reset() {
    this.count = 0;
    this.countObject = {value: 0};
  }

  resetCount() {
    this.count = 0;
  }

  newCountObject() {
    this.countObject = {value: 0};
  }
}
