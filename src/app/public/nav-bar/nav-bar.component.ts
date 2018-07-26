import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
        {
            label: 'Home',
            icon: 'fa fa-fw fa-home',
            routerLink: ['/home']
        },
        {
          label: 'Forms',
          icon: 'fa fa-fw fa-file-o',
          routerLink: ['/forms']
        },
        {
          label: 'Change Detection',
          icon: 'fa fa-fw fa-gear',
          routerLink: ['/change-detection'],
        }];
  }
}
