import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';

import { getIncome, getIncomeSuccess, updateIncome, updateIncomeSuccess } from './income.actions';
import { IncomeState, initialState } from './income.state';

const _incomeReducer = createReducer(initialState,
    on(getIncome, (state, action): IncomeState => Object.assign({}, state, { loading: true })),
    on(getIncomeSuccess, (state, action): IncomeState => Object.assign({}, state, { loading: false, income: action.income })),
    on(updateIncome, (state, action): IncomeState => Object.assign({}, state, { loading: true })),
    on(updateIncomeSuccess, (state, action): IncomeState => Object.assign({}, state, { loading: false, income: action.income })),
);

export function incomeReducer(state, action) {
    return _incomeReducer(state, action);
};


export const getIncomeFeature = createFeatureSelector<any>('income');

export const getIncomeState = createSelector(
    getIncomeFeature,
    (state) => state ? state.income: null
);
