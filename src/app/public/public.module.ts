import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPrimengModule } from 'src/app/custom-primeng/custom-primeng.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  imports: [
    CommonModule,
    CustomPrimengModule,
  ],
  exports: [
    NavBarComponent
  ],
  declarations: [NavBarComponent]
})
export class PublicModule { }
