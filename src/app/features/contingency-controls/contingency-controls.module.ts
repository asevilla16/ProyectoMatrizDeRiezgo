import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from './../../shared/shared.module';
import { ContingencyControlsComponent } from './components/contingency-controls-list/contingency-controls.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContingencyControlsRoutingModule } from './contingency-controls-routing.module';
import { ControlsFormComponent } from './components/controls-form/controls-form.component';


@NgModule({
  declarations: [
    ContingencyControlsComponent,
    ControlsFormComponent
  ],
  imports: [
    CommonModule,
    ContingencyControlsRoutingModule,
    SharedModule,
    ToastrModule
  ]
})
export class ContingencyControlsModule { }
