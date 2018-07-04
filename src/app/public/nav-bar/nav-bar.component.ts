import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  private items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [{
      label: 'Forms Example',
      items: [
        {label: 'Reactive Forms'},
        {label: 'Template Forms'}
      ]
    },
    {
      label: 'Change Detection',
      items: [
        {label: 'Normal Strategy'},
        {label: 'OnPush Strategy'}
      ]
    }
    ]
  }

}
