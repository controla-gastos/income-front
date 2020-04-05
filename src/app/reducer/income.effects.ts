import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Location } from '@angular/common';

import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { getIncome, getIncomeSuccess, updateIncome, updateIncomeSuccess } from './income.actions';
import { IncomeService } from '../services/income.service';

@Injectable()
export class IncomeEffect {

    getTagsEffect$ = createEffect(() => this.actions$.pipe(
        ofType(getIncome),
        mergeMap(() => this.incomeService.getIncome()
            .pipe(
                map((response: any) => getIncomeSuccess(response.data)),
                catchError(() => EMPTY)
            )
        )
    ));

    updateIncomeEffect$ = createEffect(() => this.actions$.pipe(
        ofType(updateIncome),
        mergeMap((action) => this.incomeService.updateIncome(action.income)
            .pipe(
                map((response: any) => updateIncomeSuccess(action.income)),
                catchError(() => EMPTY)
            )
        )
    ));


    updateIncomeSuccessEffect$ = createEffect(() => this.actions$.pipe(
        ofType(updateIncomeSuccess),
        tap(() => this.location.go('/'))),
        { dispatch: false });

    constructor(
        private actions$: Actions,
        private incomeService: IncomeService,
        private location: Location
    ) {
    }
}
