import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AccordionModule, PanelMenuModule, TabMenuModule, TabViewModule, Dropdown, GrowlModule, ProgressSpinnerModule, ProgressSpinner } from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    MenuModule,
    ButtonModule,
    AccordionModule,
    PanelModule,
    PanelMenuModule,
    RadioButtonModule,
    TabMenuModule,
    TabViewModule,
    TableModule,
    DropdownModule,
    GrowlModule,
    ProgressSpinnerModule
  ],
  exports: [
    MenuModule,
    ButtonModule,
    AccordionModule,
    PanelModule,
    RadioButtonModule,
    PanelMenuModule,
    TabMenuModule,
    TabViewModule,
    TableModule,
    DropdownModule,
    GrowlModule,
    ProgressSpinnerModule
  ]
})
export class CustomPrimengModule { }
