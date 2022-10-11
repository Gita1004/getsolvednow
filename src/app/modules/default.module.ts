import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutes } from '../routes/default.routes';
import { DefaultComponent } from '../pages/default/default.component';
import { AboutComponent } from '../pages/about/about.component';


@NgModule({
  declarations: [DefaultComponent, AboutComponent],
  imports: [
    CommonModule,
    DefaultRoutes
  ]
})
export class DefaultModule { }
