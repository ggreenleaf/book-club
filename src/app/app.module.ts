import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from 'src/app/core/core.module';
import { CustomMaterialModule } from 'src/app/custom-material/custom-material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavBarComponent } from './public/nav-bar/nav-bar.component';
import { PublicModule } from 'src/app/public/public.module';
import { CustomPrimengModule } from './custom-primeng/custom-primeng.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    PublicModule,
    CustomPrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
