import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { AccordionModule, PanelMenuModule, TabMenuModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MenuModule,
    ButtonModule,
    AccordionModule,
    PanelModule,
    PanelMenuModule,
    RadioButtonModule,
    TabMenuModule
  ],
  exports: [
    MenuModule,
    ButtonModule,
    AccordionModule,
    PanelModule,
    RadioButtonModule,
    PanelMenuModule,
    TabMenuModule
  ]
})
export class CustomPrimengModule { }
