import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypeListComponent } from './type-list/type-list.component';
import { SimpleTemplateComponent } from 'src/app/forms/template/simple-template/simple-template.component';
import { MultiComponentTemplateBaseComponent } from 'src/app/forms/template/multi-component/multi-component-template-base/multi-component-template-base.component';
import { CustomValidationTemplateComponent } from 'src/app/forms/template/custom-validation-template/custom-validation-template.component';
import { SimpleReactiveComponent } from './reactive/simple-reactive/simple-reactive.component';

const routes: Routes = [
  {path: 'forms', component: TypeListComponent, 
    children: [
      {path: 'simple-template', component: SimpleTemplateComponent},
      {path: 'multi-component', component: MultiComponentTemplateBaseComponent},
      {path: 'custom-validation', component: CustomValidationTemplateComponent},
      {path: 'simple-reactive', component: SimpleReactiveComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
