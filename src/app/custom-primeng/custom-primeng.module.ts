import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { AccordionModule } from 'primeng/primeng';
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
    RadioButtonModule
  ],
  exports: [
    MenuModule,
    ButtonModule,
    AccordionModule,
    PanelModule,
    RadioButtonModule
  ]
})
export class CustomPrimengModule { }
