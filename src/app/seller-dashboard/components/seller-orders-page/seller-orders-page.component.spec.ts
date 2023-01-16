import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerOrdersPageComponent } from './seller-orders-page.component';

describe('SellerOrdersPageComponent', () => {
  let component: SellerOrdersPageComponent;
  let fixture: ComponentFixture<SellerOrdersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerOrdersPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerOrdersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
