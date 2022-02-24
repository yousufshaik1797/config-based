import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTableFilterComponent } from './ui-table-filter.component';

describe('UiTableFilterComponent', () => {
  let component: UiTableFilterComponent;
  let fixture: ComponentFixture<UiTableFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiTableFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiTableFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
