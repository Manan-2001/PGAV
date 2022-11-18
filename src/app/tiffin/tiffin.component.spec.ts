import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiffinComponent } from './tiffin.component';

describe('TiffinComponent', () => {
  let component: TiffinComponent;
  let fixture: ComponentFixture<TiffinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiffinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiffinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
