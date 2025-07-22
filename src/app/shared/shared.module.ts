import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';

const materialModules = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatSelectModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...materialModules],
  exports: [...materialModules],
})
export class SharedModule {}
