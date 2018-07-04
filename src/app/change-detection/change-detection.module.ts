import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeDetectionRoutingModule } from './change-detection-routing.module';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { DefaultComponent } from './default/default.component';

@NgModule({
  imports: [
    CommonModule,
    ChangeDetectionRoutingModule
  ],
  declarations: [ChangeDetectionComponent, DefaultComponent]
})
export class ChangeDetectionModule { }
