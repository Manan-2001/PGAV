import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerLogoutPageComponent } from './seller-logout-page.component';

describe('SellerLogoutPageComponent', () => {
  let component: SellerLogoutPageComponent;
  let fixture: ComponentFixture<SellerLogoutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerLogoutPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerLogoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
