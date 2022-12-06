import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDetailsPageComponent } from './account-details-page.component';

describe('AccountDetailsPageComponent', () => {
  let component: AccountDetailsPageComponent;
  let fixture: ComponentFixture<AccountDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
