import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTableColComponent } from './ui-table-col.component';

describe('UiTableColComponent', () => {
  let component: UiTableColComponent;
  let fixture: ComponentFixture<UiTableColComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiTableColComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiTableColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
