import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  constructor(protected http: HttpClient) { }

  getIncome() {
    return this.http
      .get(`${environment.urlIncome}/getIncome`);
  }
}
