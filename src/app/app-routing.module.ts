import { RisksComponent } from './features/risks/components/risk-form/risks.component';
import { MatrixComponent } from './features/matrix/matrix.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {
    path: 'process',
    loadChildren: () => import('./features/process/process.module').then((m) => m.ProcessModule)
  },
  {
    path: 'risk',
    loadChildren: () => import('./features/risks/risks.module').then((m) => m.RisksModule)
  },
  {
    path: 'controls',
    loadChildren: () => import('./features/contingency-controls/contingency-controls.module').then((m) => m.ContingencyControlsModule)
  },
  {
    path: 'action-plans',
    loadChildren: () => import('./features/action-plans/action-plans.module').then((m) => m.ActionPlansModule)
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
