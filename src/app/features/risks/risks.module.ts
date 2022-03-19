import { SharedModule } from './../../shared/shared.module';
import { RisksComponent } from './components/risk-form/risks.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RisksRoutingModule } from './risks-routing.module';
import { RisksListComponent } from './components/risks-list/risks-list.component';


@NgModule({
  declarations: [
    RisksListComponent,
    RisksComponent
  ],
  imports: [
    CommonModule,
    RisksRoutingModule,
    SharedModule
  ]
})
export class RisksModule { }
