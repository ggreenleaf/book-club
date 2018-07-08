import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { throwIfAlreadyLoaded } from './module-import-guard';
import {MessageService } from 'primeng/components/common/messageservice';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  exports: [
  ],
  declarations: [],
  providers: [MessageService]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule')
  }
}

