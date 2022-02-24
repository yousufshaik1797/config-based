import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiTableComponent } from './ui-table/ui-table.component';
import { UiTableColComponent } from './ui-table-col/ui-table-col.component';
import { UiTableFilterComponent } from './ui-table-filter/ui-table-filter.component';
import { UiTableFilterItemComponent } from './ui-table-filter-item/ui-table-filter-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    UiTableComponent,
    UiTableColComponent,
    UiTableFilterComponent,
    UiTableFilterItemComponent
  ],
  exports: [
    UiTableComponent,
    UiTableColComponent,
    UiTableFilterComponent,
    UiTableFilterItemComponent,
  ],
})
export class UiTableModule {}
