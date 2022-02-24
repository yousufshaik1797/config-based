import { UiTableModule } from 'ui-table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureTableComponent } from './feature-table/feature-table.component';

@NgModule({
  imports: [CommonModule, UiTableModule],
  declarations: [
    FeatureTableComponent
  ],
  exports: [
    FeatureTableComponent
  ],
})
export class FeatureTableModule {}
