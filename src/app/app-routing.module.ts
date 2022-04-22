import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { NovoFormComponent } from './novo-form/novo-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'templateForm', component: NovoFormComponent },
    { path: 'dataForm', component: ReactiveFormComponent},
    { path: '', pathMatch: 'full', redirectTo: 'dataForm'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
