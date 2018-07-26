import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PublicModule } from './public/public.module';
import { CustomPrimengModule } from './custom-primeng/custom-primeng.module';
import { ChangeDetectionModule } from './change-detection/change-detection.module';
import {FormsModule as CustomFormsModule}  from './forms/forms.module';
import { NgIfModule } from './ng-if/ng-if.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CustomFormsModule,
    ChangeDetectionModule,
    NgIfModule,
    CoreModule,
    SharedModule,
    PublicModule,
    CustomPrimengModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
