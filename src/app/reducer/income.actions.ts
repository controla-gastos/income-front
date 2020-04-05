import { createAction } from '@ngrx/store';

import { Income } from 'src/app/models/income';

export const getIncome = createAction('[Income] getIncome');

export const getIncomeSuccess = createAction('[Income] getIncomeSuccess', 
    (income: Income) => ({income}));
