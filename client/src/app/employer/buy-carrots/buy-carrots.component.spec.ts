import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCarrotsComponent } from './buy-carrots.component';

describe('BuyCarrotsComponent', () => {
  let component: BuyCarrotsComponent;
  let fixture: ComponentFixture<BuyCarrotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyCarrotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyCarrotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
