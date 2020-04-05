import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Income } from '../models/income';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  constructor(protected http: HttpClient) { }

  getIncome() {
    return this.http
      .get(`${environment.urlIncome}/getIncome`);
  }

  updateIncome(income: Income) {
    return this.http
      .put(`${environment.urlIncome}/updateIncome`, income);
  }

}
