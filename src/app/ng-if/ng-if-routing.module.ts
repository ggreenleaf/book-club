import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgIfHomeComponent } from './ng-if-home/ng-if-home.component';

const routes: Routes = [
  {path: 'ng-if', component: NgIfHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgIfRoutingModule { }
