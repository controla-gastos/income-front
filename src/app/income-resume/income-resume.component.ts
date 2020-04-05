import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { IncomeState } from '../reducer/income.state';
import { Income } from '../models/income';
import { getIncomeState } from '../reducer/income.reducer';

@Component({
  selector: 'app-income-resume',
  templateUrl: './income-resume.component.html',
  styleUrls: ['./income-resume.component.scss']
})
export class IncomeResumeComponent implements OnInit {

  $income: Observable<Income>;

  constructor(private store: Store<IncomeState>) { 
    this.$income = this.store.select(getIncomeState);
  }

  ngOnInit(): void {
  }

  calculatePercent(value1: number, 
    value2: number) {
      return value1 * 100 /value2;
  }

}
