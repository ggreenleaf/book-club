import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPrimengModule } from 'src/app/custom-primeng/custom-primeng.module';
import { PublicModule } from '../public/public.module';
@NgModule({
  imports: [
    CommonModule,
    PublicModule,
    CustomPrimengModule
  ],
  declarations: []
})
export class SharedModule { }
