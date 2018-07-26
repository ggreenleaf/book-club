import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPrimengModule } from '../custom-primeng/custom-primeng.module';
import { PublicModule } from '../public/public.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    PublicModule,
    ReactiveFormsModule,
    FormsModule,
    CustomPrimengModule
  ],
  declarations: []
})
export class SharedModule { }
