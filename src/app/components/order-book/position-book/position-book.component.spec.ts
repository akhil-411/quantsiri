import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionBookComponent } from './position-book.component';

describe('PositionBookComponent', () => {
  let component: PositionBookComponent;
  let fixture: ComponentFixture<PositionBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
