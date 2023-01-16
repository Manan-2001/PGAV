import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerAnalyticsPageComponent } from './seller-analytics-page.component';

describe('SellerAnalyticsPageComponent', () => {
  let component: SellerAnalyticsPageComponent;
  let fixture: ComponentFixture<SellerAnalyticsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerAnalyticsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerAnalyticsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
