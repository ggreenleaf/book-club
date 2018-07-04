import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPrimengModule } from 'src/app/custom-primeng/custom-primeng.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    CustomPrimengModule,
  ],
  exports: [
    NavBarComponent
  ],
  declarations: [NavBarComponent, HomeComponent]
})
export class PublicModule { }
