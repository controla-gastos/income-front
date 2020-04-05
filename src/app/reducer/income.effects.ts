import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { getIncome, getIncomeSuccess } from './income.actions';
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

    constructor(
        private actions$: Actions,
        private incomeService: IncomeService,
    ) {
    }
}
