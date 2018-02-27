import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasecarrotsComponent } from './purchasecarrots.component';

describe('PurchasecarrotsComponent', () => {
  let component: PurchasecarrotsComponent;
  let fixture: ComponentFixture<PurchasecarrotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasecarrotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasecarrotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
