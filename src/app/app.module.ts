import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PublicModule } from 'src/app/public/public.module';
import { CustomPrimengModule } from './custom-primeng/custom-primeng.module';
import { ChangeDetectionModule } from './change-detection/change-detection.module';
import {FormsModule as CustomFormsModule}  from 'src/app/forms/forms.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomFormsModule,
    ChangeDetectionModule,
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
