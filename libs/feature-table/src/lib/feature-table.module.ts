import { UiTableModule } from 'ui-table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureTableComponent } from './feature-table/feature-table.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, UiTableModule,FormsModule],
  declarations: [
    FeatureTableComponent
  ],
  exports: [
    FeatureTableComponent
  ],
})
export class FeatureTableModule {}
