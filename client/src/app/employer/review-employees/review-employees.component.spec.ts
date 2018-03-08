import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewEmployeesComponent } from './review-employees.component';

describe('ReviewEmployeesComponent', () => {
  let component: ReviewEmployeesComponent;
  let fixture: ComponentFixture<ReviewEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
