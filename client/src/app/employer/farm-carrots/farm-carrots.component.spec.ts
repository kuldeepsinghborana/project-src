import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmCarrotsComponent } from './farm-carrots.component';

describe('FarmCarrotsComponent', () => {
  let component: FarmCarrotsComponent;
  let fixture: ComponentFixture<FarmCarrotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmCarrotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmCarrotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
