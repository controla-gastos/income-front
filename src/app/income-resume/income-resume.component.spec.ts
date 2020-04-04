import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeResumeComponent } from './income-resume.component';

describe('IncomeResumeComponent', () => {
  let component: IncomeResumeComponent;
  let fixture: ComponentFixture<IncomeResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
