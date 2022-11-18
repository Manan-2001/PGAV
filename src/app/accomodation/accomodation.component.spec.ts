import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomodationComponent } from './accomodation.component';

describe('AccomodationComponent', () => {
  let component: AccomodationComponent;
  let fixture: ComponentFixture<AccomodationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccomodationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccomodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
