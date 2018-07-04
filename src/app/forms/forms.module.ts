import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsRoutingModule
  ],
  declarations: [FormComponent]
})
export class FormsModule { }
