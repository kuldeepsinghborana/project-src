import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrotAnalyticsComponent } from './carrot-analytics.component';

describe('CarrotAnalyticsComponent', () => {
  let component: CarrotAnalyticsComponent;
  let fixture: ComponentFixture<CarrotAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrotAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrotAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
