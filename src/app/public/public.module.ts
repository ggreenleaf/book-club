import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPrimengModule } from '../custom-primeng/custom-primeng.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ReferenceListComponent } from './reference-list/reference-list.component';

@NgModule({
  imports: [
    CommonModule,
    CustomPrimengModule,
  ],
  exports: [
    NavBarComponent,
    ReferenceListComponent
  ],
  declarations: [NavBarComponent, HomeComponent, ReferenceListComponent]
})
export class PublicModule { }
