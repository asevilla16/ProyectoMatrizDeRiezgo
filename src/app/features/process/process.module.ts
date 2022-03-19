import { SharedModule } from './../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessRoutingModule } from './process-routing.module';
import { ProcessComponent } from './components/process/process.component';
import { ProcessFormComponent } from './components/process-form/process-form.component';


@NgModule({
  declarations: [
    ProcessComponent,
    ProcessFormComponent
  ],
  imports: [
    CommonModule,
    ProcessRoutingModule,
    SharedModule
  ]
})
export class ProcessModule { }
