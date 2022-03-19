import { ActionPlansComponent } from './components/action-plans/action-plans.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionPlanFormComponent } from './components/action-plan-form/action-plan-form.component';

const routes: Routes = [
  {
    path: '',
    component: ActionPlanFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActionPlansRoutingModule { }
