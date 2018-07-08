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
          {label: 'Simple', routerLink: 'simple-template'},
          {label: 'Multi-Component', routerLink: 'multi-component'},
          {label: 'Custom Validation', routerLink: 'custom-validation'}
        ]
      },
      {
        label: 'Reactive',
        items: [
          {label: 'Simple', routerLink: 'simple-reactive'},
          {label: 'Multi-Component'},
          {label: 'Custom Validation'}
        ]
      }
    ]
  }

}
