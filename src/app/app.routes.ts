import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    loadChildren: () => import('./modules/default.module').then(
      module => module.DefaultModule
    )
  },
  {
    path: 'login',
    component: DefaultComponent,
    loadChildren: () => import('./modules/auth.module').then(
      module => module.AuthModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutes { }
