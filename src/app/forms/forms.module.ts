import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormComponent } from './form/form.component';
import { TypeListComponent } from './type-list/type-list.component';
import { CustomPrimengModule } from '../custom-primeng/custom-primeng.module';
import { PublicModule } from '../public/public.module';
import { SimpleTemplateComponent } from './template/simple-template/simple-template.component';
import { MultiComponentTemplateBaseComponent } from './template/multi-component/multi-component-template-base/multi-component-template-base.component';
import { CustomValidationTemplateComponent } from './template/custom-validation-template/custom-validation-template.component';
import { SimpleReactiveComponent } from './reactive/simple-reactive/simple-reactive.component';
import {SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule as NgFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgFormsModule,
    ReactiveFormsModule,
    PublicModule,
    CustomPrimengModule,
    FormsRoutingModule
  ],
  declarations: [FormComponent, TypeListComponent, SimpleTemplateComponent, MultiComponentTemplateBaseComponent, CustomValidationTemplateComponent, SimpleReactiveComponent]
})
export class FormsModule { }
