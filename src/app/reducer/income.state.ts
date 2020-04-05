import { Income } from '../models/income';

export interface IncomeState {
    income: Income;
    loading: boolean;
}

export const initialState: IncomeState = {
    income: null,
    loading: false
} 
