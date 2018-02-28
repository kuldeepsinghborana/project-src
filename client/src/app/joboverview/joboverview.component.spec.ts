import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoboverviewComponent } from './joboverview.component';

describe('JoboverviewComponent', () => {
  let component: JoboverviewComponent;
  let fixture: ComponentFixture<JoboverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoboverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoboverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
