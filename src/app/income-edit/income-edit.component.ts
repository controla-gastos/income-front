import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { IncomeState } from '../reducer/income.state';
import { Income } from '../models/income';
import { getIncomeState } from '../reducer/income.reducer';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { updateIncome } from '../reducer/income.actions';

@Component({
  selector: 'app-income-edit',
  templateUrl: './income-edit.component.html',
  styleUrls: ['./income-edit.component.scss']
})
export class IncomeEditComponent implements OnInit, OnDestroy {

  $income: Observable<Income>;
  income: Income;
  incomeSubs: Subscription;
  form: FormGroup;

  constructor(private store: Store<IncomeState>,
    private formBuilder: FormBuilder, ) {
    this.$income = this.store.select(getIncomeState);
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.incomeSubs = this.$income
      .subscribe((income: Income) => {
        if (income) {
          this.income = income;
          this.form = this.formBuilder
            .group({
              plannedActual: new FormControl(this.income.plannedActual, [Validators.required]),
              plannedIncome: new FormControl(this.income.plannedIncome, [Validators.required]),
              plannedAmountSpend: new FormControl(this.income.plannedAmountSpend, [Validators.required]),
            })
        }
      });
  }

  isFieldValid(field: string) {
    return !this.form.get(field).valid && this.isFieldTouched(field);
  }

  isFieldTouched(field: string) {
    return this.form.get(field).touched;
  }

  validateAllFormFields() {
    Object.keys(this.form.controls).forEach(field => {
      const control = this.form.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.income = Object.assign({},
        this.income, this.form.value);
      this.store.dispatch(updateIncome(this.income))
    } else {
      this.validateAllFormFields();
    }
  }

  ngOnDestroy(): void {
    this.incomeSubs.unsubscribe();
  }

}
