import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionPlansRoutingModule } from './action-plans-routing.module';
import { ActionPlansComponent } from './components/action-plans/action-plans.component';
import { ActionPlanFormComponent } from './components/action-plan-form/action-plan-form.component';


@NgModule({
  declarations: [
    ActionPlansComponent,
    ActionPlanFormComponent
  ],
  imports: [
    CommonModule,
    ActionPlansRoutingModule,
    SharedModule
  ]
})
export class ActionPlansModule { }
