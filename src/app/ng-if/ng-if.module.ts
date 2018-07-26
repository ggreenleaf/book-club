import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgIfRoutingModule } from './ng-if-routing.module';
import { NgIfHomeComponent } from './ng-if-home/ng-if-home.component';
import { PublicModule } from '../public/public.module';
import { CustomPrimengModule } from '../custom-primeng/custom-primeng.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PublicModule,
    SharedModule,
    CustomPrimengModule,
    NgIfRoutingModule
  ],
  declarations: [NgIfHomeComponent]
})
export class NgIfModule { }
