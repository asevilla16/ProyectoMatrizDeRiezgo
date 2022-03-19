import { RisksListComponent } from './components/risks-list/risks-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RisksComponent } from './components/risk-form/risks.component';

const routes: Routes = [
  {
    path: '',
    component: RisksListComponent
  },
  {
    path: 'new',
    component: RisksComponent
  },
  {
    path: 'edit/:id',
    component: RisksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RisksRoutingModule { }
