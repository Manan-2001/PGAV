import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TifComponent } from './tif.component';

describe('TifComponent', () => {
  let component: TifComponent;
  let fixture: ComponentFixture<TifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
