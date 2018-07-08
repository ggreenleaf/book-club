import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css']
})
export class TypeListComponent implements OnInit {
  items: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Template',
        items: [
          {label: 'Simple', routerLink: '/forms/simple-template'},
          {label: 'Multi-Component', routerLink: 'forms/multi-component'},
          {label: 'Custom Validation', routerLink: '/forms/custom-validation'}
        ]
      },
      {
        label: 'Reactive',
        items: [
          {label: 'Simple', routerLink: '/forms/simple-reactive'},
          {label: 'Multi-Component'},
          {label: 'Custom Validation'}
        ]
      }
    ]
  }

}
