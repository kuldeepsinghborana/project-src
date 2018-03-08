import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteEmployeesComponent } from './invite-employees.component';

describe('InviteEmployeesComponent', () => {
  let component: InviteEmployeesComponent;
  let fixture: ComponentFixture<InviteEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
