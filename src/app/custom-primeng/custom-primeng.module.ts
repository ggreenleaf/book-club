import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { AccordionModule, PanelMenuModule, TabMenuModule, TabViewModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';

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
    TableModule
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
    TableModule
  ]
})
export class CustomPrimengModule { }
