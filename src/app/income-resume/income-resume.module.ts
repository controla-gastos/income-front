import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

import { IncomeResumeRoutingModule } from './income-resume-routing.module';
import { IncomeResumeComponent } from './income-resume.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [IncomeResumeComponent],
  imports: [
    CommonModule,
    IncomeResumeRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatDividerModule,
    MatListModule,
    FlexLayoutModule
  ]
})
export class IncomeResumeModule { }
