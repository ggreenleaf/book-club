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
            routerLink: ['/home']
        },
        {
          label: 'Forms',
          icon: 'fa fa-fw fa-file-o',
          routerLink: ['/forms']
        //   items: [
        //     {
        //         label: 'Reactive Forms', 
        //         icon: 'fa fa-fw fa-plus',
        //         items: [
        //             {label: 'Simple'},
        //             {label: 'Complex'},
        //             {label: 'Multi-Component'},
        //         ]
        //     }, 
        //     {
        //     label: 'Template Forms', 
        //     icon: 'fa fa-fw fa-plus',
        //     items: [
        //         {label: 'Simple'},
        //         {label: 'Complex'},
        //         {label: 'Multi-Component'},
        //     ]  
        //   },
        //   ]
        },
        {
          label: 'Change Detection',
          icon: 'fa fa-fw fa-gear',
          routerLink: ['/change-detection'],
        //   items: [
        //     {
        //         label: 'Default Strategy',
        //         icon: 'fa fa-fw fa-refresh',
        //         items: [
        //             {label: 'View', icon: 'fa fa-fw fa-save', routerLink: ['/change-detection/default']},
        //         ]
        //     },
        //     {
        //         label: 'OnPush Strategy',
        //         icon: 'fa fa-fw fa-phone',
        //         items: [
        //             {label: 'View', icon: 'fa fa-fw fa-minus', routerLink: ['/change-detection/on-push']}
        //         ]
        //     }
        //   ]
        }];
  }
}
