import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { IncomeState } from './reducer/income.state';
import { getIncome } from './reducer/income.actions';

@Component({
  selector: 'income-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit{

  constructor(private store: Store<IncomeState>) {

  }

  ngOnInit(): void {
    this.store.dispatch(getIncome());
  }

  ngOnDestroy(): void {
    document
      .getElementById('single-spa-application:income')
      .innerHTML = '';
  }
}
