import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJobEditComponent } from './admin-job-edit.component';

describe('AdminJobEditComponent', () => {
  let component: AdminJobEditComponent;
  let fixture: ComponentFixture<AdminJobEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminJobEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminJobEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
