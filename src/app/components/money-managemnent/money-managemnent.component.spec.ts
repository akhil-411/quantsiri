import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyManagemnentComponent } from './money-managemnent.component';

describe('MoneyManagemnentComponent', () => {
  let component: MoneyManagemnentComponent;
  let fixture: ComponentFixture<MoneyManagemnentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneyManagemnentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyManagemnentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
