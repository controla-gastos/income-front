import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncomeEditComponent } from './income-edit.component';

const routes: Routes = [
  {path: '', component: IncomeEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncomeEditRoutingModule { }
