import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';

const materialModules = [MatProgressBarModule];

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
