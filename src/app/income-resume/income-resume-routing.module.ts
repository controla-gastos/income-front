import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncomeResumeComponent } from './income-resume.component';

const routes: Routes = [
  {path:'', component: IncomeResumeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncomeResumeRoutingModule { }
