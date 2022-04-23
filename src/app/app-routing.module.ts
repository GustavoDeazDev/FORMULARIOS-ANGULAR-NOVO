import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFormComponent } from './template-form/template-form.component';

const routes: Routes = [
  {
    path: 'templateForm', component: TemplateFormComponent },
    { path: 'dataForm', component: ReactiveFormComponent},
    { path: '', pathMatch: 'full', redirectTo: 'dataForm'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
