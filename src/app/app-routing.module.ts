import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { EmptyRouteComponent } from './empty-route/empty-route.component';

const routes: Routes = [
  {path: '', loadChildren: () => import('./income-resume/income-resume.module').then(m => m.IncomeResumeModule)},
  {path: 'income/income-edit', loadChildren: () => import('./income-edit/income-edit.module').then(m => m.IncomeEditModule)},
  {path: '**', component: EmptyRouteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppRoutingModule { }
