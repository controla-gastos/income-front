import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'income-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{

  title = 'income-front';

  ngOnDestroy(): void {
    document
      .getElementById('single-spa-application:income')
      .innerHTML = '';
  }
}
