import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeDetectionRoutingModule } from './change-detection-routing.module';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { DefaultComponent } from './default/default.component';
import { SharedModule } from '../shared/shared.module';
import { CustomPrimengModule } from 'src/app/custom-primeng/custom-primeng.module';
import { ParentComponent } from './default/parent/parent.component';
import { ChildComponent } from './default/child/child.component';
import { GrandChildComponent } from './default/grand-child/grand-child.component';
import { ChangeLogComponent } from './change-log/change-log.component';

@NgModule({
  imports: [
    CommonModule,
    CustomPrimengModule,
    ChangeDetectionRoutingModule
  ],
  declarations: [ChangeDetectionComponent, DefaultComponent, ParentComponent, ChildComponent, GrandChildComponent, ChangeLogComponent]
})
export class ChangeDetectionModule { }
