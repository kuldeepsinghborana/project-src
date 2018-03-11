import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAddEditComponent } from './job-add-edit.component';

describe('JobAddEditComponent', () => {
  let component: JobAddEditComponent;
  let fixture: ComponentFixture<JobAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
