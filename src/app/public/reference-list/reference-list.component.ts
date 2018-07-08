import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reference-list',
  templateUrl: './reference-list.component.html',
  styleUrls: ['./reference-list.component.css']
})
export class ReferenceListComponent implements OnInit {
  @Input() sources: string[];
  constructor() { }

  ngOnInit() {
  }

}
