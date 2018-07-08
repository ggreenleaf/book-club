import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  sources: string[];
  constructor() { 
    this.sources = [
      "https://blog.angularindepth.com/everything-you-need-to-know-about-change-detection-in-angular-8006c51d206f",
      "angular.io/docs"
    ]
  }

  ngOnInit() {
  }

}
