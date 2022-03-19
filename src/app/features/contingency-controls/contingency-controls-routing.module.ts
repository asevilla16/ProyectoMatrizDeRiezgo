import { ControlsFormComponent } from './components/controls-form/controls-form.component';
import { ContingencyControlsComponent } from './components/contingency-controls-list/contingency-controls.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ContingencyControlsComponent
  },
  {
    path: 'new',
    component: ControlsFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContingencyControlsRoutingModule { }
