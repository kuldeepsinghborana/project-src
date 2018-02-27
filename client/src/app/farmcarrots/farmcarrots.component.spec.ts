import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmcarrotsComponent } from './farmcarrots.component';

describe('FarmcarrotsComponent', () => {
  let component: FarmcarrotsComponent;
  let fixture: ComponentFixture<FarmcarrotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmcarrotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmcarrotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
