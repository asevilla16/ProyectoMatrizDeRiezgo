import { ProcessComponent } from './components/process/process.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessFormComponent } from './components/process-form/process-form.component';

const routes: Routes = [
  {
    path: '',
    component: ProcessComponent
  },
  {
    path: 'new',
    component: ProcessFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessRoutingModule { }
