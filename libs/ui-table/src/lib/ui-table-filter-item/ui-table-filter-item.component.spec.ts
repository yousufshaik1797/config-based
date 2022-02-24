import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTableFilterItemComponent } from './ui-table-filter-item.component';

describe('UiTableFilterItemComponent', () => {
  let component: UiTableFilterItemComponent;
  let fixture: ComponentFixture<UiTableFilterItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiTableFilterItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiTableFilterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
