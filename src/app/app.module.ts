import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {incomeReducer} from './reducer/income.reducer';
import { IncomeEffect } from './reducer/income.effects';
import { IncomeService } from './services/income.service';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FlexLayoutModule,
    StoreModule.forRoot({ income: incomeReducer }),
    EffectsModule.forRoot([IncomeEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    HttpClientModule
  ],
  providers: [IncomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
