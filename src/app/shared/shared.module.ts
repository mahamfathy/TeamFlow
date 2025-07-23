import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';

const materialModules = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatButtonToggleModule,
  MatCardModule,
  MatProgressBarModule,
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule,
  MatProgressBarModule,
];

@NgModule({
  declarations: [],
  imports: [
    ...materialModules,
    CommonModule,
    MatOptionModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    ...materialModules,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    CommonModule,
    FormsModule,
    RouterModule,
  ],
})
export class SharedModule {}
